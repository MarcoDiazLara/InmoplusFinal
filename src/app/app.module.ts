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
import { ResultSearchComponent } from './components/resultsearch/resultsearch.component';

import { Formu1Component } from './components/formu1/formu1.component';

import { MenuUsuarioComponent } from './components/menu-usuario/menu-usuario.component';
import { StesProgressComponent } from './components/stes-progress/stes-progress.component';
import { EstatusComponent } from './components/estatus/estatus.component';
import { Formu2Component } from './components/formu2/formu2.component';
import { PaginaconocenosComponent } from './paginaconocenos/paginaconocenos.component';
import { PerfilesdeofrecerComponent } from './perfilesdeofrecer/perfilesdeofrecer.component';
import { BarralateralmenuComponent } from './components/barralateralmenu/barralateralmenu.component';
import { MainsectionComponent } from './components/mainsection/mainsection.component';
import { WidgetComponent } from './components/widget/widget.component';
import { Brokerpage1Component } from './components/brokerpage1/brokerpage1.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    NavmenuComponent,
    MenuUsuarioComponent,
    EstatusComponent,
    StesProgressComponent,



    PagenotfoundComponent,CarruselComponent, SearchComponent, DescargaComponent, FooterComponent, ContentComponent, RegistroComponent, ConocenosComponent, ResultSearchComponent, Formu1Component, Formu2Component, PaginaconocenosComponent, PerfilesdeofrecerComponent, BarralateralmenuComponent, MainsectionComponent, WidgetComponent, Brokerpage1Component,

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
