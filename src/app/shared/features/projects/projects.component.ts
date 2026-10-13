import { Component } from '@angular/core';
import { ImageCarouselComponent } from '../../components/image-carousel/image-carousel.component';

@Component({
  selector: 'app-projects',
  imports: [ImageCarouselComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  readonly projectFilters = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'ai', label: 'Inteligencia Artificial' },
    { id: 'institutional', label: 'Sistemas Institucionales' },
    { id: 'fullstack', label: 'Full Stack & ERP' }
  ];

  activeProjectFilter = 'all';

  selvaFoodImages: string[] = [];
  infratechImages: string[] = [];
  otiImages: string[] = [];

  bioheartImages: string[] = [
    'assets/bioheart.jpeg'
  ];
  planiaImages: string[] = [
    'assets/plania.jpeg'
  ];
  encuestasImages: string[] = [
    'assets/sistema de encuestas.jpeg'
  ];
  inventarioImages: string[] = [
    'assets/inventario.jpeg',
    'assets/inventario2.png'
  ];
  alquilaFacilImages: string[] = [
    'assets/alquillafacil.jpeg'
  ];
  minimarketImages: string[] = [
    'assets/login_minimarket.jpeg'
  ];
  hotelImages: string[] = [];

  setProjectFilter(filter: string): void {
    this.activeProjectFilter = filter;
  }

  matchesProjectFilter(category: string): boolean {
    return this.activeProjectFilter === 'all' || this.activeProjectFilter === category;
  }
}
