import { Component, Input, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TabsComponent,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'layout-design';
  // here i am using the interpolation.
  Email:string="kmss@gmail.com";
  password:string="kmss@123";
       
//Here i am using the property binding.
  message: string="hello kmss!";
  isDisabled:boolean=true;
  //Here i am using the event binding.
  count: number=0;
  incrementcount(): void
  {
    this.count++;
  }
  resetcount():void

  {
    this.count=0;
  }
name:string="";

users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
 
];


}
