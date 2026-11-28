import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import fs from 'fs';
import path from 'path';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PicGetter {
  constructor(private http: HttpClient) { }

  getImageUrls(): Observable<string> {
    return this.http.get<string>('src/assets');
  }
}
