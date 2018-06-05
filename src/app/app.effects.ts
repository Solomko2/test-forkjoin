import { Injectable } from "@angular/core";
import { AppService } from "./app.service";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {catchError, delay, map, mergeMap, switchMap} from 'rxjs/operators';
import * as fromActions from "./app.actions";
import { forkJoin, of } from "rxjs";

@Injectable()
export class AppEffects {
  @Effect()
  getPosts$ = this.a$.pipe(
    delay(5000),
    ofType(fromActions.GET_POSTS),
    mergeMap(() =>
      this.s
        .getPosts()
        .pipe(
          map(
            (res: fromActions.AppActions) =>
              new fromActions.GetPostsSuccess(res)
          ),
          catchError((res: any) => of(new fromActions.GetPostsFailure(res)))
        )
    )
  );

  @Effect()
  getPost$ = this.a$.pipe(
    ofType(fromActions.GET_POST),
    mergeMap(() =>
      this.s
        .getPost()
        .pipe(
          map(
            (res: fromActions.AppActions) => new fromActions.GetPostSuccess(res)
          ),
          catchError((res: any) => of(new fromActions.GetPostFailure(res)))
        )
    )
  );
  //
  // @Effect()
  // test$ = this.a$.pipe(
  //   ofType(fromActions.GET_POST),
  //   mergeMap(() => {
  //     const f = forkJoin(this.s.getPost(), this.s.getPosts());
  //
  //     return f.pipe(
  //       mergeMap(items => [
  //         new fromActions.GetPostSuccess(items[0]),
  //         new fromActions.GetPostsSuccess(items[1])
  //       ])
  //     );
  //   })
  // );

  constructor(private s: AppService, private a$: Actions) {}
}
