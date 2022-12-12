import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { AngularMarkdownEditorModule } from 'angular-markdown-editor';

import { AppComponent } from './app.component';
import { AppRoutingRoutingModule } from './app-routing.module';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';

// @dynamic
@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    TemplateComponent,
  ],
  imports: [
    AppRoutingRoutingModule,
    BrowserModule,
    FormsModule,
    MarkdownModule.forRoot({
      // loader: HttpClient, // optional, only if you use [src] attribute
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: false,
          pedantic: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),
    ReactiveFormsModule,
    AngularMarkdownEditorModule.forRoot({
      // add any Global Options/Config you might want
      // to avoid passing the same options over and over in each components of your App
      iconlibrary: 'fa'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
