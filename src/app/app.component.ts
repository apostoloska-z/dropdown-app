import { Component } from '@angular/core';
import { handleOptionsVisibilityService } from "./services/handleOptionsVisibility.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  constructor(
    private handleOptionsVisibilityService: handleOptionsVisibilityService,
  ) {}
  

  public onDocumentClick($event: any) {
    if ($event.target.id !== "dropdown" && $event.target.parentNode.id !== "dropdown-items") {
      this.handleOptionsVisibilityService.handleOptionsVisibility(false);
    }
  }
}

