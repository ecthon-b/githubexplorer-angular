import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor(private http: HttpClient) { }

  getRepositoriesAPI(): Observable<any[]> {
    return this.http.get<any[]>(`https://api.github.com/users/ecthon/repos`)
    // return this.http.get<any[]>('https://api.github.com/users/ecthon/repos')
  }

}
