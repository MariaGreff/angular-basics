import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { PlaygroundComponent } from './playground/playground.component';
import { PostFormComponent } from './post-form/post-form.component';
import { StyleDirective } from './directives/style.directive';
import { DirectivesPlaygroundComponent } from './directives-playground/directives-playground.component';
import { ComponentsPlaygroundComponent } from './components-playground/components-playground.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    PostFormComponent,
    PostComponent,
    StyleDirective,
    DirectivesPlaygroundComponent,
    ComponentsPlaygroundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
