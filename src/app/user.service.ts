import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private role: string = '';

  constructor() {}

  public getRole(): string {
    return this.role;
  }
  public setRole(role: string): void {
    this.role = role;
  }
}
