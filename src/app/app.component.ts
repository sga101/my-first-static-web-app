import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>{{ message }}</div>
    <pre>{{ user | json }}</pre>`,
})
export class AppComponent {
  message = '';
  user = '';

  constructor(private http: HttpClient) {
    this.http.get('/api/message').subscribe((resp: any) => {
      this.message = resp.text;
      this.user = resp.user;
    });
  }
}
