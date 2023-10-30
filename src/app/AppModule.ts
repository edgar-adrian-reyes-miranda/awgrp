import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioEscolarComponent } from './formulario-escolar/formulario-escolar.component';
import { FormularioIngresoComponent } from './formulario-ingreso/formulario-ingreso.component';
import { FormularioFTDComponent } from './formulario-ftd/formulario-ftd.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'formularioEscolar', component: FormularioEscolarComponent },
  { path: 'formularioFTD', component: FormularioFTDComponent },
  { path: 'formularioingreso', component: FormularioIngresoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormularioEscolarComponent,
    FormularioIngresoComponent,
    FormularioFTDComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) // Mueve esta línea aquí
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
