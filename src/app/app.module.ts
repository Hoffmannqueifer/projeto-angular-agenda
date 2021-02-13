import { ContatoService } from './contato.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContatoComponent } from './contato/contato.component';
import {ReactiveFormsModule} from '@angular/forms'
import {NgxMaskModule} from 'ngx-mask'

//imports para usar o material do angular
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatIconModule} from '@angular/material/icon';  
import {MatCardModule} from '@angular/material/card'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { ContatoDetalheComponent } from './contato-detalhe/contato-detalhe.component'; 




@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    ContatoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule, 
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot({dropSpecialCharacters: false})
  ],
  providers: [
    ContatoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
 
