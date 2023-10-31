import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioEscolarComponent } from './formulario-escolar/formulario-escolar.component';
import { FormularioIngresoComponent } from './formulario-ingreso/formulario-ingreso.component';
import { FormularioFTDComponent } from './formulario-ftd/formulario-ftd.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'formulario-escolar', component: FormularioEscolarComponent },
  { path: 'formulario-ftd', component: FormularioFTDComponent },
  { path: 'formulario-ingreso', component: FormularioIngresoComponent }
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
    MatSidenavModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
