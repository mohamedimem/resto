import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}

@NgModule({
  declarations: [
      // Declare your AppComponent
  ],
  imports: [
    BrowserModule,  // Import BrowserModule for basic Angular functionality
    FormsModule  // Import FormsModule for template-driven forms
  ],
  bootstrap: []  // Bootstrap your main component
})
export class AppModule {}

