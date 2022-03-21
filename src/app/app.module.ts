import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistroclienteComponent } from './componentes/registrocliente/registrocliente.component';
import { RegistrohacedorComponent } from './componentes/registrohacedor/registrohacedor.component';
import { SolicitarservicioComponent } from './componentes/solicitarservicio/solicitarservicio.component';
import { ConfighacedorComponent } from './componentes/confighacedor/confighacedor.component';
import { HomeclienteComponent } from './componentes/homecliente/homecliente.component';
import { HttpClientModule } from '@angular/common/http';
import { MurohacedorComponent } from './componentes/murohacedor/murohacedor.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroclienteComponent,
    RegistrohacedorComponent,
    SolicitarservicioComponent,
    ConfighacedorComponent,
    HomeclienteComponent,
    MurohacedorComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
