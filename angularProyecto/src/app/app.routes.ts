import { Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IniciarSeccionComponent } from './components/iniciar-seccion/iniciar-seccion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
export const routes: Routes = [
    {path:"contacto", component: ContactoComponent, title: "Contacto"},
    {path:"inicio-seccion", component: IniciarSeccionComponent, title: "Inicio Seccion"},
    {path:"inicio", component: InicioComponent, title: "Inicio"},
    {path:"nosotros", component: NosotrosComponent, title: "Nosotros"},
    {path:"privado", component: PrivadoComponent, title: "Privado"},
    {path:"productos", component: ProductosComponent, title: "Producto"},
    {path:"registrarse", component: RegistrarseComponent, title: "Registro"},
    {path:"servicios", component: ServiciosComponent, title: "Servicios"},
    {path:"", redirectTo: "inicio", pathMatch: "full"},
    {path:"**", component: NoEncontradoComponent, title: "404"}


];
