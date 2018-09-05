import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilmService } from './service/film.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { AdminModule} from './admin/admin.module';
 
const routers: Routes = [
//   {path: '',
//   component : AppComponent,
//   children: [
//     {path: '', component : HomeComponent},
//     {path: 'admin', component: AdminComponent}
//   ]
// }
    {path: '', redirectTo: '', pathMatch: 'full'},
];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routers,
      {
          enableTracing: false
      }
    ),
    AdminModule
  ],
  providers: [
    FilmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
