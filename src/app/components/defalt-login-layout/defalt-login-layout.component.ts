import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-defalt-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './defalt-login-layout.component.html',
  styleUrl: './defalt-login-layout.component.scss'
})
export class DefaltLoginLayoutComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
  @Input() disablePrimaryBtn: boolean = true;
  @Output("submit") onSubmit = new EventEmitter();

  @Output("navigate") onNavigate = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }

  navigate(){
    this.onNavigate.emit();
  }
}
