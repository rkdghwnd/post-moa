import { fork, takeLatest, delay, put, all } from 'redux-saga/effects';
import axios from 'axios';
import {
  FOLLOW_FAILURE,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  UNFOLLOW_FAILURE,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
} from '../reducers/user';

// 여기는 * 붙이지 말기
function logInAPI(data) {
  return axios.post('/api/login', data);
}

// put : dispatch 와 같은 동작
function* logIn(action) {
  try {
    // call : 첫번째 인자로 들어간 콜백함수를 실행시킴(call은 동기적 실행)
    // 다음 인자들은 첫번재 콜백함수의 인자
    // call이 호출되면 logInAPI가 return 할때까지 기다렸다가 return 값을 result에 넣어준다.
    // 그 이후에 다음 줄 실행

    // const result = yield call(logInAPI, action.data);
    // delay : ㅇㅇ초 지연시키기
    console.log('saga login');
    yield delay(1000);
    console.log(action);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

// 여기는 * 붙이지 말기
function logOutAPI() {
  return axios.post('/api/logout');
}

function* logOut() {
  try {
    // call : 인자로 들어간 콜백함수를 실행시킴(call은 동기적 실행)
    // call이 호출되면 logInAPI가 return 할때까지 기다렸다가 return 값을 result에 넣어준다.
    // 그 이후에 다음 줄 실행

    // const result = yield call(logOutAPI);
    // delay : ㅇㅇ초 지연시키기
    yield delay(1000);
    // throw new Error('') 여기에 적으면 아래줄 실행안하고 catch 로 넘어간다
    yield put({
      type: LOG_OUT_SUCCESS,
      data: null,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

// 여기는 * 붙이지 말기
function signUpAPI() {
  return axios.post('/api/logout');
}

function* signUp() {
  try {
    // call : 인자로 들어간 콜백함수를 실행시킴(call은 동기적 실행)
    // call이 호출되면 logInAPI가 return 할때까지 기다렸다가 return 값을 result에 넣어준다.
    // 그 이후에 다음 줄 실행

    // const result = yield call(signUpAPI);
    // delay : ㅇㅇ초 지연시키기
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: null,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function followAPI() {
  return axios.post('/api/logout');
}

function* follow(action) {
  try {
    yield delay(1000);
    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: FOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

function unfollowAPI() {
  return axios.post('/api/logout');
}

function* unfollow(action) {
  try {
    yield delay(1000);
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: UNFOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

// take : [인자] 액션이 실행될때까지 기다리겠다.
// 첫번째 인자 액션 실행 -> 두번째 인자 콜백함수 호출
// 마치 이벤트 리스너처럼 사용을 하게 됨(watch 함수들을 핸들러처럼 정의)
function* watchLogIn() {
  // yield take로만 작성하면 한번만 실행되기 때문에
  // 여러번 로그인을 할 수 없다.
  // 여러번 실행을 하려면 while(true){}로 감싸거나
  // takeEvery를 사용한다.

  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  // takeLatest : 기존에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업만 수행한다.
  // takeLastest에서 동작이 취소 되는 시점 :
  // 프론트 -> 백엔드 요청은 남아있음, '백엔드 -> 프론트 "응답"'을 취소

  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  // takeLatest : 기존에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업만 수행한다.
  // takeLastest에서 동작이 취소 되는 시점 :
  // 프론트 -> 백엔드 요청은 남아있음, '백엔드 -> 프론트 "응답"'을 취소

  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

export default function* userSaga() {
  // function* : 제너레이터 함수,
  // yield : 제너레이터 함수안에서 사용가능한 문법, 현재 줄까지만 실행하고 실행을 중단시킴
  // const g = 제너레이터(); g.next(); 로 yield 넘어가며 실행 가능
  // 제너레이터 : 객체의 한 종류,

  // all : 인자로 들어간 배열의 요소를 전부 실행시킴
  // fork : 인자로 들어간 콜백함수를 실행시킴 (fork는 비동기적 실행)
  // 콜백함수(watch 함수들) 실행이 끝나는것과 관계없이 다음 줄 실행
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchFollow),
    fork(watchUnfollow),
  ]);
}
