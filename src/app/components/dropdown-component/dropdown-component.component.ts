import { Component, OnInit, Input} from '@angular/core';
import { handleOptionsVisibilityService } from "../../services/handleOptionsVisibility.service";

@Component({
  selector: 'app-dropdown-component',
  templateUrl: './dropdown-component.component.html',
  styleUrls: ['./dropdown-component.component.scss']
})
export class DropdownComponentComponent implements OnInit {
  @Input() public dropdownHeader: string = '';
  @Input() public options: Array<any> = [];
  public optionsVisibility: boolean = false;
  public optionsSelected: Array<any> = [];
  public option: any;

  constructor(
    private handleOptionsVisibilityService: handleOptionsVisibilityService,
  ) {}

  ngOnInit(): void {
    this.handleOptionsVisibilityService.visibility$
      .subscribe(
        data => this.optionsVisibility = data
      )
  }

  public toggleOptionsVisibility(): void {
    this.optionsVisibility = !this.optionsVisibility;
  }

  public handleOptionsClick($event: any): void {
    this.option = $event.target.id;
    if (this.optionsSelected.includes(this.option)) {
      const index = this.optionsSelected.indexOf(this.option)
      this.optionsSelected.splice(index, 1);
    } else {
      this.optionsSelected.push(this.option);
    }
  }
}
