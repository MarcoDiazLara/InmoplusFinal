import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ResultSearchComponent } from './components/resultsearch/resultsearch.component';
import { PaginaconocenosComponent } from './paginaconocenos/paginaconocenos.component';
import { PerfilesdeofrecerComponent } from './perfilesdeofrecer/perfilesdeofrecer.component';
import { PaginaDescargaComponent } from './pagina-descarga/pagina-descarga.component';
//Rutas de navegacion 
const routes: Routes = [
  //esta linea de codigo es la encargada de llevarte a la pagina principal cuando no tienes una ruta que seguir
{path:'',redirectTo:'pagina1',pathMatch:'full'},
//aca defines los nombres de las rutas que vas a visitar, con la de alma le pones {path: "Login", component: LoginComponent}
{path:'home',component:HomeComponent},
{path:'pagina1', component:Pagina1Component },
{path:'pagina2',component: Pagina2Component},
{path:'registro',component: RegistroComponent },
{path:'perfilesdeofrecer',component:PerfilesdeofrecerComponent},
{path:'resultsearch', component:ResultSearchComponent},
{path:'paginaconocenos',component:PaginaconocenosComponent},
{path:'paginadescarga ',component: PaginaDescargaComponent },



{path:'**', component:PagenotfoundComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

