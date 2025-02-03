import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-color-selection',
  templateUrl: './color-selection.component.html',
  styleUrls: ['./color-selection.component.scss'],
  standalone : false,
})
export class ColorSelectionComponent   {
  @Output() colorSelected  = new EventEmitter<string>();
  colors :string[] =['#FFD1DC','#FA8072','#FFECB3','#32CD32','#87CEEB','#00FFFF'];
  selectedColor : string ='';
  constructor() { }
  
  selectColor (color:string){
    this.selectedColor =color;
    this.colorSelected.emit(this.selectedColor);
  }


}

