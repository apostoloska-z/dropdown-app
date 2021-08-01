import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
    
export class handleOptionsVisibilityService {
  private visibilitySource = new Subject<boolean>();
  visibility$ = this.visibilitySource.asObservable();
  
  constructor() { };
    
  public handleOptionsVisibility(data: boolean) {
    this.visibilitySource.next(data);
  }

} 
