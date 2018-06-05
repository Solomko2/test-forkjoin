import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectEntitie, selectEntities} from './app.selectors';
import * as a from './app.actions';
import {Observable, forkJoin, of, combineLatest, from, merge} from 'rxjs';
import {combineAll, concat, concatAll, delay, filter, map, mergeAll, mergeMap, take, withLatestFrom} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public posts$: Observable<any>;
  public post$: Observable<any>;

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    const observable = forkJoin(
      this.store.select(selectEntitie),
      this.store.select(selectEntities)
    );

    observable.subscribe(
      (value: any) => {
        [this.post$, this.posts$] = value;
      }
    );

    // this.post$.subscribe(console.log);
    // this.posts$.subscribe(console.log);

    this.store.dispatch(new a.GetPosts());
    this.store.dispatch(new a.GetPost());

  }
}
