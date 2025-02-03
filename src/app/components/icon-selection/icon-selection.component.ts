import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-icon-selection',
  templateUrl: 'icon-selection.component.html',
  styleUrls: ['icon-selection.component.scss'],
  standalone :false,
})
export class IconSelectionComponent  {
  
  @Output() iconSelected = new EventEmitter<string>();
  icons :string[] =['alarm-outline','basketball','pizza-outline','cart-outline'];
  selectedIcon : string ='';
  constructor() { }
  selectIcon(icon : string){
    this.selectedIcon = icon;
    this.iconSelected.emit(this.selectedIcon); 
  }



}

