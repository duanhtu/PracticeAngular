import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  public getFilms() {
    return this.http.get('http://localhost:58395/api/Values');
  }

  public createFilm(film) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('http://localhost:58395/api/Values', film, httpOptions);
  }

  public updateFilm(id, film) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put('http://localhost:58395/api/Values/' + id, film, httpOptions);
  }

  public deleteFilm(id) {
    return this.http.delete('http://localhost:58395/api/Values/' + id);
  }
}
