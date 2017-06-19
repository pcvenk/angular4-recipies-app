import { Component } from '@angular/core';
import {DataStorageService} from "../shared/data-storage.service";
import {Response} from "@angular/http";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})

export class HeaderComponent {
  constructor(private dataStorage: DataStorageService,
              private authService: AuthService,
              private router: Router) {}

  onSave() {
    this.dataStorage.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      )
  }

  onFetch() {
    this.dataStorage.getRecipes();
  }

  onLogOut() {
    this.authService.logOut();
    this.router.navigate(['/signin']);
  }
}
