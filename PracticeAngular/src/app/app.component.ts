import { Component, OnInit } from '@angular/core';
import { FilmService } from './service/film.service';
import Film from './model/Film'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isShow = true;
  code: string;
  title: string;
  did: string;
  kind: string;
  films: any;

  constructor(private filmService: FilmService) {
  }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(data => {
      console.log(data);
      this.films = data;
    });
  }

  show() {
    this.isShow = !this.isShow;
  }

  create() {
    const film = new Film(this.code, this.title, +this.did, this.kind);
    this.filmService.createFilm(film).subscribe(data => {
    });
  }

  delete(code) {
    this.filmService.deleteFilm(code).subscribe(data => {
    });
  }

  edit() {
    const film = new Film(this.code, this.title, +this.did, this.kind);
    this.filmService.updateFilm(this.code, film).subscribe(data => {
    });
  }
}
