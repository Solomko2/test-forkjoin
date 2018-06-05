import * as fromAction from './app.actions';
import {combineReducers} from '@ngrx/store';

export interface State {
  entities: any;
  pending: boolean;
  entitie: any;
}

export const initialState: State = {
  entities: undefined,
  pending: false,
  entitie: undefined
};

export function reducer(state: State = initialState, action: fromAction.AppActions): State {
  switch (action.type) {
    case fromAction.GET_POSTS:
      return Object.assign({}, state, {
        entities: []
      });
    case fromAction.GET_POST:
      return Object.assign({}, state, {
        entitie: []
      });
    case fromAction.GET_POSTS_SUCCESS:
      return Object.assign({}, state, {
        entities: action.payload
      });
    case fromAction.GET_POST_SUCCESS:
      return Object.assign({}, state, {
        entitie: action.payload
      });
    default:
      return state;
  }
}

// export function reducerPost(state: State = initialState, action: fromAction.AppActions): State {
//   switch (action.type) {
//     case fromAction.GET_POST_SUCCESS:
//       return Object.assign({}, state, {
//         entitie: action.payload
//       });
//     default:
//       return state;
//   }
// }

// export const reducers: any = combineReducers({
//   posts: reducerPosts,
//   post: reducerPost
// });
//
// export function reducer(state: State, action: any) {
//   return reducers(state, action);
// }


export const getEntities = (state: State) => state.entities;
export const getEntitie = (state: State) => state.entitie;
