import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { CreateComponent } from './create/create.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FiterComponent } from './fiter/fiter.component';
import {DropdownModule} from 'primeng/dropdown';
import { ViewNotesComponent } from './view-notes/view-notes.component';
import {CheckboxModule} from 'primeng/checkbox';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    CreateComponent,
    FiterComponent,
    ViewNotesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    CheckboxModule,
    environment.production ? [] : AkitaNgDevtools.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
