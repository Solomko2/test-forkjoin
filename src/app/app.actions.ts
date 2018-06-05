export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const GET_POST = 'GET_POST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAILURE = 'GET_POST_FAILURE';


export class GetPosts {
  readonly type = GET_POSTS;
}

export class GetPostsSuccess {
  readonly type = GET_POSTS_SUCCESS;
  constructor(public payload: any) {}
}

export class GetPostsFailure {
  readonly type = GET_POSTS_FAILURE;

  constructor(public payload: any) {}
}

export class GetPost {
  readonly type = GET_POST;
}

export class GetPostSuccess {
  readonly type = GET_POST_SUCCESS;
  constructor(public payload: any) {}
}

export class GetPostFailure {
  readonly type = GET_POST_FAILURE;

  constructor(public payload: any) {}
}

export type AppActions = | GetPosts | GetPostsSuccess | GetPostsFailure | GetPost | GetPostSuccess | GetPostFailure;
