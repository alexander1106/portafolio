import { Component } from '@angular/core';
import { ImageCarouselComponent } from '../../components/image-carousel/image-carousel.component';

@Component({
  selector: 'app-projects',
  imports: [ImageCarouselComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

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
  erpImages: string[] = [];

}
