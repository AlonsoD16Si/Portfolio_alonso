import { Component, Renderer2 } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  items: MenuItem[] | undefined;
  themeLinkElement!: HTMLLinkElement;
  isLightTheme = true;

  constructor(private renderer: Renderer2) {}

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme;
    const theme = this.isLightTheme ? 'theme-light' : 'theme-dark';
    this.setTheme(theme);
    localStorage.setItem('theme', theme);
  }

  private setTheme(theme: string) {
    if (!this.themeLinkElement) {
      this.themeLinkElement = this.renderer.createElement('link');
      this.themeLinkElement.rel = 'stylesheet';
      this.themeLinkElement.type = 'text/css';
      this.renderer.appendChild(document.head, this.themeLinkElement);
    }
    this.themeLinkElement.href = `${theme}.css`;
  }

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      localStorage.setItem('theme', 'theme-light');
    }

    this.isLightTheme = savedTheme === 'theme-light';
    this.setTheme(this.isLightTheme ? 'theme-light' : 'theme-dark');

    this.items = [
      { label: 'Work' },
      { label: 'About' },
      { icon: 'pi pi-file-o', url:'' },
      { icon: 'pi pi-linkedin',url:'' },
      { icon: 'pi pi-instagram' ,url:''},
      { icon: 'pi pi-discord',url:'' },
   
    ];
  }

}