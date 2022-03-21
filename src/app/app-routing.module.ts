import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfighacedorComponent } from './componentes/confighacedor/confighacedor.component';
import { HomeclienteComponent } from './componentes/homecliente/homecliente.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { MurohacedorComponent } from './componentes/murohacedor/murohacedor.component';
import { RegistroclienteComponent } from './componentes/registrocliente/registrocliente.component';
import { RegistrohacedorComponent } from './componentes/registrohacedor/registrohacedor.component';
import { SolicitarservicioComponent } from './componentes/solicitarservicio/solicitarservicio.component';

const routes: Routes = [
  {
    path:'Home',
    component:InicioComponent
  },
  {
    path:'HomeCliente',
    component:HomeclienteComponent
  },
  {
    path:'HomeHacedor',
    component:MurohacedorComponent
  },
  {
    path:'RegistroCliente',
    component: RegistroclienteComponent
  },
  {
    path:'RegistroHacedor',
    component:RegistrohacedorComponent
  },
  {
    path: 'Hacedor/Configuracion',
    component:ConfighacedorComponent
  },
  {
    path:'SolicitarServicio',
    component:SolicitarservicioComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
