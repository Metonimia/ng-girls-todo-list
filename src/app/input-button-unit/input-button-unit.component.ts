import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit = new EventEmitter<string>();
  title = 'Hello World';

  constructor() {
  }

  ngOnInit() {
  }

  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
  }

}
