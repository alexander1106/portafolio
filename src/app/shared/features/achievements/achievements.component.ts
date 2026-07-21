import { Component } from '@angular/core';
import { ImageCarouselComponent } from '../../components/image-carousel/image-carousel.component';

@Component({
  selector: 'app-achievements',
  imports: [ImageCarouselComponent],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {

  peruHubImages: string[] = [
    'assets/peru hub.jpeg',
    'assets/peru hub.jpg'
  ];

  delegadoImages: string[] = [
    'assets/peru hub.jpeg',
    'assets/peru hub.jpg',
    'assets/Delegado Estudiantil _ Perú Hub certificado-Digital Universitario 2026_page-0001.jpg'
  ];

  torneoInternoImages: string[] = [
    'assets/torneo interno.jpg'
  ];

  bioheartFeriaImages: string[] = [
    'assets/biohert.jpg',
    'assets/bioherat-feria.jpg',
    'assets/certificado de Tercer lugar FERIA-FISI.jpg'
  ];

  pronabecImages: string[] = [
    'assets/Constancia de voluntariado PRONABEC.jpg'
  ];

  htmlCssImages: string[] = [
    'assets/FT PE - Certificado_page-0001.jpg'
  ];

  iaImages: string[] = [
    'assets/certificado de especializacion de ia-parte 1.jpg',
    'assets/certificado de especializacion de ia-parte 2.jpg'
  ];

  oracleImages: string[] = [
    'assets/Certificado-Oracle Next Education (1)_page-0001.jpg'
  ];

  googleImages: string[] = [
    'assets/CERTIFICADO GOOGLE ACTIVATE (2)_page-0001.jpg'
  ];

}
