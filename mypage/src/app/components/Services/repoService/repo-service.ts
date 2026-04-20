import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env';
import { Repo, RepoResponse } from '@Types';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  private http = inject(HttpClient);

  GetFirstRepos(): Observable<Repo[]> {
    return this.http.get<RepoResponse>(`${environment.apiUrl}/V1/PortFolio/repos`).pipe(
      map((res) => {
        if (!res.success) {
          throw new Error('Request was not successful');
        }
        return res.result;
      }),
      catchError((err) => {
        console.error('Failed to fetch repos:', err);
        return throwError(() => err);
      })
    );
  }

  GetRepos(page: number = 1): Observable<RepoResponse> {
    return this.http.get<RepoResponse>(`${environment.apiUrl}/V1/PortFolio/repos`, {
      params: { page } 
    }).pipe(
      map((res) => {
        if (!res.success) {
          throw new Error('Request was not successful');
        }
        return res;
      }),
      catchError((err) => {
        console.error('Failed to fetch repos:', err);
        return throwError(() => err);
      })
    );
  }
}