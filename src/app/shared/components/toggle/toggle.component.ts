import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  class:
    | 'normalOff'
    | 'normalOn' = 'normalOff';

  toggle = new FormControl();

  @Input() text = '';
  @Input() toggleValue = false;
  @Input() textColor = 'black'

  @Output() toggled = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
    this.toggle.setValue(this.toggleValue);
    this.setToggleValue(this.toggle.value);
  
      this.toggle.valueChanges
        .pipe(
          tap((value) => {
            this.setToggleValue(value);
            this.toggled.emit(value);
          })
        )
        .subscribe();
  }

  private setToggleValue(param: boolean) {
      param ? (this.class = 'normalOn') : (this.class = 'normalOff');
  }
}