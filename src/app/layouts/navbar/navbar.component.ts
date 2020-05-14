import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navBarSearchForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.navBarSearchForm = new FormGroup({
      searchKey: new FormControl(''),
    });
  }
}
