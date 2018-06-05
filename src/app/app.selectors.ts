import {createSelector, createFeatureSelector, MemoizedSelector} from '@ngrx/store';
import * as fromFeachers from './app.reducer';

type MemoizedState<T> = MemoizedSelector<fromFeachers.State, T>;

export const selectAppState = createFeatureSelector<any>('app');

export const selectPostsState = <MemoizedState<any>>createSelector(
  selectAppState,
  (state: any) => state.posts
);

export const selectEntities = <MemoizedState<any>>createSelector(
  selectAppState,
  fromFeachers.getEntities
);


export const selectPostState = <MemoizedState<any>>createSelector(
  selectAppState,
  (state: any) => state.post
);

export const selectEntitie = <MemoizedState<any>>createSelector(
  selectAppState,
  fromFeachers.getEntitie
);
