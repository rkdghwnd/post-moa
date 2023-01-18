import { fork, takeLatest, delay, put, all } from 'redux-saga/effects';
import axios from 'axios';
import shortId from 'shortid';
import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  generateDummyPost,
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
} from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

// 여기는 * 붙이지 말기
function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function* addPost(action) {
  try {
    // call : 인자로 들어간 콜백함수를 실행시킴(call은 동기적 실행)
    // call이 호출되면 logInAPI가 return 할때까지 기다렸다가 return 값을 result에 넣어준다.
    // 그 이후에 다음 줄 실행

    // const result = yield call(addPostAPI, action.data);
    // delay : ㅇㅇ초 지연시키기
    yield delay(1000);
    const id = shortId.generate();
    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        id,
        content: action.data,
      },
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: id,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

// 여기는 * 붙이지 말기
function addCommentAPI(data) {
  return axios.post(`/api/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    // call : 인자로 들어간 콜백함수를 실행시킴(call은 동기적 실행)
    // call이 호출되면 logInAPI가 return 할때까지 기다렸다가 return 값을 result에 넣어준다.
    // 그 이후에 다음 줄 실행

    // const result = yield call(addPostAPI, action.data);
    // delay : ㅇㅇ초 지연시키기
    yield delay(1000);

    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data,
    });
  }
}

// 여기는 * 붙이지 말기
function removePostAPI(data) {
  return axios.post(`/api/post/`, data);
}

function* removePost(action) {
  try {
    yield delay(1000);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data,
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: REMOVE_POST_FAILURE,
      data: err.response.data,
    });
  }
}

// 여기는 * 붙이지 말기
function loadPostsAPI(data) {
  return axios.post(`/api/post/`, data);
}

function* loadPosts(action) {
  try {
    yield delay(1000);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: generateDummyPost(10),
    });
  } catch (err) {
    yield put({
      type: LOAD_POSTS_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchAddPost() {
  // throttle : 여러번 요청이 들어왔을때 ㅇㅇ초에 하나씩 실행
  // ex) throttle(5000,콜백함수) : 3개 요청 들어오면 3개를 0초 5초 10초에 수행하는 식
  // takeLatest : 기존에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업만 수행한다.
  // takeLastest에서 동작이 취소 되는 시점 :
  // 프론트 -> 백엔드 요청은 남아있음, '백엔드 -> 프론트 "응답"'을 취소
  yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}
function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}
function* watchLoadPost() {
  yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
  // 인피니트 스크롤링시 이벤트가 너무 많이 발생함
  // -> request도 불필요하게 많이 발생
  // -> 최적화 필요

  // 1.throttle 이용하는 경우
  // 시간차만 생길 뿐 request가 들어온만큼 success를 실행시킨다. -> 잘못된 동작
  // 2.takeLatest로 처리하는 경우
  // success는 하나지만 request는 여러개이다. -> 유효한 동작이지만 request를 막진 못했다
  // 3.loadPostsLoading 을 이용하는 방법
  // request dispatch 자체를 로딩중이 아닐때만 실행시킨다 -> 여러번 request 안옴(최적화)
}
export default function* postSaga() {
  // function* : 제너레이터 함수,
  // yield : 제너레이터 함수안에서 사용가능한 문법, 현재 줄까지만 실행하고 실행을 중단시킴
  // const g = 제너레이터(); g.next(); 로 yield 넘어가며 실행 가능
  // 제너레이터 : 객체의 한 종류,

  // all : 인자로 들어간 배열의 요소를 전부 실행시킴
  // fork : 인자로 들어간 콜백함수를 실행시킴 (fork는 비동기적 실행)
  // 콜백함수(watch 함수들) 실행이 끝나는것과 관계없이 다음 줄 실행
  yield all([
    fork(watchAddPost),
    fork(watchAddComment),
    fork(watchRemovePost),
    fork(watchLoadPost),
  ]);
}
