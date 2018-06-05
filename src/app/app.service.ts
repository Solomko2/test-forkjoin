import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {delay} from 'rxjs/operators';

@Injectable()
export class AppService {
  public getPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  public getPost(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }

  constructor(private http: HttpClient) {}
}
