import { Component, OnInit, Input} from '@angular/core';
import { handleOptionsVisibilityService } from "../../services/handleOptionsVisibility.service";

@Component({
  selector: 'app-dropdown-component',
  templateUrl: './dropdown-component.component.html',
  styleUrls: ['./dropdown-component.component.scss']
})
export class DropdownComponentComponent implements OnInit {
  @Input() public options: Array<any> = [];
  public optionsVisibility: boolean = false;
  public optionsSelected: Array<any> = [];
  public option: any;
  public alertVisibility: boolean = false;

  constructor(
    private handleOptionsVisibilityService: handleOptionsVisibilityService,
  ) {}

  ngOnInit(): void {
    this.optionsSelected.push(this.options[0]);
    this.handleOptionsVisibilityService.visibility$
      .subscribe(
        data => {
          this.optionsVisibility = data;
          if (!this.optionsSelected.length) {
            this.handleNoOptionSelection();
          }
        })
  }

  public toggleOptionsVisibility(): void {
    this.optionsVisibility = !this.optionsVisibility;
    if (!this.optionsSelected.length) {
      this.handleNoOptionSelection();
    }
  }

  public handleOptionsClick($event: any): void {
    this.option = $event.target.id;
    if (this.optionsSelected.includes(this.option)) {
      const index = this.optionsSelected.indexOf(this.option)
      this.optionsSelected.splice(index, 1);
    } else {
      this.optionsSelected.push(this.option);
    }
    if (!this.optionsSelected.length) {
      this.alertVisibility = true;
    } else {this.alertVisibility = false}
  }

  public handleNoOptionSelection(): void {
    this.optionsSelected.push(this.options[0]);
    this.alertVisibility = false;
  }
}
