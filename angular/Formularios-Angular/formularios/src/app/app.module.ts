import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { ClienteComponent } from './cliente/cliente.component';
import { FormularioComponent } from './form/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
      //ClienteComponent,
      FormularioComponent
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
