import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { Pagina3Component } from './components/pagina3/pagina3.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MatMenuModule} from '@angular/material/menu';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { SearchComponent } from './components/search/search.component';
import { DescargaComponent } from './components/descarga/descarga.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { ResultSearchComponent } from './components/result-search/result-search.component';
<<<<<<< Updated upstream
import { Formu1Component } from './components/formu1/formu1.component';
<<<<<<< Updated upstream
=======
import { MenuUsuarioComponent } from './Components/menu-usuario/menu-usuario.component';
import { StesProgressComponent } from './Components/stes-progress/stes-progress.component';
import { EstatusComponent } from './Components/estatus/estatus.component';
>>>>>>> Stashed changes
=======
import { Formu2Component } from './Components/formu2/formu2.component';
>>>>>>> Stashed changes


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    NavmenuComponent,
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    PagenotfoundComponent,CarruselComponent, SearchComponent, DescargaComponent, FooterComponent, ContentComponent, RegistroComponent, ConocenosComponent, ResultSearchComponent, Formu1Component
=======
    PagenotfoundComponent,CarruselComponent, SearchComponent, DescargaComponent, FooterComponent, ContentComponent, RegistroComponent, ConocenosComponent, ResultSearchComponent, MenuUsuarioComponent, StesProgressComponent, EstatusComponent
>>>>>>> Stashed changes
=======
    PagenotfoundComponent,CarruselComponent, SearchComponent, DescargaComponent, FooterComponent, ContentComponent, RegistroComponent, ConocenosComponent, ResultSearchComponent, Formu1Component, Formu2Component
>>>>>>> Stashed changes
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
