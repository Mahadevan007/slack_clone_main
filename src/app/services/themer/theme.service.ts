import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  lightTheme: Theme = {
    navbar_bg: '#3f0e40',
    sidebar_bg: '#330c33',
    chat_bg: '#FFFFFF',
    chat_font: '#00000',
    chat_hover: '#f2f2f2',
    chat_icon_color: 'rgba(0, 0, 0, 0.7)',
  };
  darkTheme: Theme = {
    navbar_bg: '#121016',
    sidebar_bg: '#19171D',
    chat_bg: '#1A1D21',
    chat_font: '#ffff',
    chat_hover: '#222529',
    chat_icon_color: '#79909C',
  };
  themeDark: Subject<Theme> = new Subject<Theme>();
  themeDarkObservable: Observable<Theme> = this.themeDark.asObservable();
  isDarkTheme: boolean = false;

  constructor() {
    this.themeDarkObservable.subscribe(this.reactToChange);
  }
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeDark.next(this.isDarkTheme ? this.darkTheme : this.lightTheme);
  }
  reactToChange(theme: Theme) {
    for (let key in theme)
      document.documentElement.style.setProperty(
        `--${key}`,
        (theme as any)[key]
      );
  }
}
