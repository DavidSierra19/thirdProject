import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContactoComponent,FooterComponent,HeaderComponent,IniciarSeccionComponent, InicioComponent,NavegacionComponent,NosotrosComponent,PrivadoComponent,ProductosComponent,RegistrarseComponent, ServiciosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularProyecto';
}
