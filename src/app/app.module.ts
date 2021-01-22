import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DadesProductesService } from './service/dades-productes.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListFilterPipe } from './product-list/product-list-filter.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    ProductListComponent,
    WelcomeComponent,
    ProductListFilterPipe,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [DadesProductesService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
