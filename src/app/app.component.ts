import { Component } from '@angular/core';

interface AppPage {
  url: string;
  icon: string;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages: AppPage[] = [
    { url: '/home', icon: 'home', title: 'Home' },
    { url: '/settings', icon: 'settings', title: 'Settings' },
    { url: '/report', icon: 'report', title: 'Report' },
    // Tambahkan item lainnya sesuai kebutuhan
  ];
  public labels = ['Bro', 'Car', 'Cat', 'Dog', 'Cow', 'Elephant'];

  constructor() {}
}
