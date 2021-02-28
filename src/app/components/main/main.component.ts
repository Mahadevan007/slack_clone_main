import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/themer/theme.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private theme: ThemeService) {
    // this.theme.toggleTheme();
  }

  ngOnInit(): void {
  }

  toggle() {
    this.theme.toggleTheme();
  }

}
