import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portafolio';
  isLoading = true;

  ngOnInit(): void {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    setTimeout(() => {
      this.isLoading = false;
    }, 1400);
  }
}
