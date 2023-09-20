import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { SubirimagenesComponent } from './components/subirimagenes/subirimagenes.component';
import { Descarga1Component } from './components/descarga1/descarga1.component';
import { Formu3Component } from './components/formu3/formu3.component';
import { Formu4Component } from './components/formu4/formu4.component';
import { RegistrocompletoComponent } from './components/registrocompleto/registrocompleto.component';
import { BarralateralmenuComponent } from './components/barralateralmenu/barralateralmenu.component';
import { BrokerperfilComponent } from './components/brokerperfil/brokerperfil.component';



import { WidgetComponent } from './components/widget/widget.component';
import { MainsectionComponent } from './components/mainsection/mainsection.component';
import { Brokerpage1Component } from './components/brokerpage1/brokerpage1.component';
import { ContactobrokerComponent } from './components/contactobroker/contactobroker.component';
import { InmobiformuComponent } from './components/inmobiformu/inmobiformu.component';
import { DetailsInmComponent } from './components/details-inm/details-inm.component';
import { ContactobrokerlabuenaComponent } from './components/contactobrokerlabuena/contactobrokerlabuena.component';
import { ContactoexperienciaComponent } from './components/contactoexperiencia/contactoexperiencia.component';
import { EliminarperfilComponent } from './components/eliminarperfil/eliminarperfil.component';
import { AgregarInventariosComponent } from './components/agregar-inventarios/agregar-inventarios.component';
import { AsignarreasignarComponent } from './components/asignarreasignar/asignarreasignar.component';
import { VisualtourComponent } from './components/visualtour/visualtour.component';



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
    Formu4Component,
    Brokerpage1Component,
    BarralateralmenuComponent,
    MainsectionComponent,
    WidgetComponent,
    Brokerpage1Component,
    BrokerperfilComponent,
  PagenotfoundComponent,
  CarruselComponent,
   SearchComponent, 
   DescargaComponent, 
   FooterComponent, 
   ContentComponent, 
   RegistroComponent,
    ConocenosComponent, 
    ResultSearchComponent, 
    Formu1Component, 
    Formu2Component,
     SubirimagenesComponent, 
     Descarga1Component, 
     Formu3Component, 
     RegistrocompletoComponent,
     BarralateralmenuComponent, 
     WidgetComponent, 
     MainsectionComponent,
     Brokerpage1Component, 
     ContactobrokerComponent,
     ResultSearchComponent,
     InmobiformuComponent,
     DetailsInmComponent,
     ContactobrokerlabuenaComponent,
     ContactoexperienciaComponent,
     EliminarperfilComponent,
     AgregarInventariosComponent,
     AsignarreasignarComponent,
     VisualtourComponent,




   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,NgImageSliderModule, FormsModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }