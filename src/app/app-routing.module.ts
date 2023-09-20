import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ResultSearchComponent } from './components/resultsearch/resultsearch.component';
import { Formu1Component } from './components/formu1/formu1.component';
import { Descarga1Component } from './components/descarga1/descarga1.component';
import { Formu3Component } from './components/formu3/formu3.component';
import { Formu4Component } from './components/formu4/formu4.component';
import { SubirimagenesComponent } from './components/subirimagenes/subirimagenes.component';
import { RegistrocompletoComponent } from './components/registrocompleto/registrocompleto.component';
import { Brokerpage1Component } from './components/brokerpage1/brokerpage1.component';
import { InmobiformuComponent } from './components/inmobiformu/inmobiformu.component';
import { ConoceComponent } from './components/conoce/conoce.component';
import { DetailsInmComponent } from './components/details-inm/details-inm.component';
import { ListaInventariosComponent } from './components/lista-inventarios/lista-inventarios.component';
import { AgregarInventariosComponent } from './components/agregar-inventarios/agregar-inventarios.component';
import { AsignarreasignarComponent } from './components/asignarreasignar/asignarreasignar.component';
import { PrivacidadComponent } from './components/privacidad/privacidad.component';
import { ContactobrokerComponent } from './components/contactobroker/contactobroker.component';
import { ContactobrokerlabuenaComponent } from './components/contactobrokerlabuena/contactobrokerlabuena.component';
import { ContactoexperienciaComponent } from './components/contactoexperiencia/contactoexperiencia.component';
import { EliminarperfilComponent } from './components/eliminarperfil/eliminarperfil.component';



//Rutas de navegacion 
const routes: Routes = [
  //esta linea de codigo es la encargada de llevarte a la pagina principal cuando no tienes una ruta que seguir
{path:'',redirectTo:'pagina1',pathMatch:'full'},
//aca defines los nombres de las rutas que vas a visitar, con la de alma le pones {path: "Login", component: LoginComponent}
{path:'home',component:HomeComponent},
{path:'pagina1', component:Pagina1Component },
{path:'pagina2',component: Pagina2Component},
{path:'registro',component: RegistroComponent },
{path:'resultsearch', component:ResultSearchComponent},
{path:'formu1',component:Formu1Component },
{path:'formu3',component:Formu3Component},
{path:'formu4',component:Formu4Component},
{path:'subirimagenes',component:SubirimagenesComponent},
{path:'descarga1',component:Descarga1Component},
{path: 'registrocompleto', component: RegistrocompletoComponent},
{path:'brokerpage1',component:Brokerpage1Component},
{path:'inmobiformu', component: InmobiformuComponent},
{path:'conoce', component: ConoceComponent},
{path:'details-inm',component:DetailsInmComponent},
{path: 'listainventarios', component:ListaInventariosComponent},
{path: 'agregarinventario', component: AgregarInventariosComponent},
{path: 'asignarreasignar', component: AsignarreasignarComponent},
{path: 'privacidad', component:PrivacidadComponent},
{path: 'contactobroker',component:ContactobrokerComponent},
{path: 'contactobroker2',component: ContactobrokerlabuenaComponent},
{path: 'contactobroker3', component: ContactoexperienciaComponent},
{path: 'eliminar',component:EliminarperfilComponent},





{path:'**', component:PagenotfoundComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

