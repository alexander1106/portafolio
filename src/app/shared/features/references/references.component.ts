import { Component } from '@angular/core';
import { ImageCarouselComponent } from '../../components/image-carousel/image-carousel.component';

type ReferenceTab = 'certifications' | 'volunteering' | 'references';

interface Certificate {
  name: string;
  organization: string;
  description: string;
  date: string;
  images: string[];
}

interface VolunteeringExperience {
  name: string;
  organization: string;
  description: string;
  date: string;
  role: string;
  icon: string;
  images: string[];
}

interface ProfessionalReference {
  name: string;
  role: string;
  company: string;
}

@Component({
  selector: 'app-references',
  imports: [ImageCarouselComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})
export class ReferencesComponent {
  readonly certifications: Certificate[] = [
    {
      name: 'Inteligencia Artificial: Introducción a conceptos y aplicaciones',
      organization: 'Universidad Nacional de San Martín (UNSM)',
      description: 'Formación introductoria en conceptos y aplicaciones de inteligencia artificial.',
      date: '2025',
      images: [
        'assets/certificado de especializacion de ia-parte 1.jpg',
        'assets/certificado de especializacion de ia-parte 2.jpg'
      ]
    },
    {
      name: 'Especialización en Desarrollo Backend con Spring Boot',
      organization: 'Oracle Next Education',
      description: 'Especialización en desarrollo backend con el framework Spring Boot.',
      date: '2023',
      images: ['assets/Certificado-Oracle Next Education (1)_page-0001.jpg']
    },
    {
      name: 'Desarrollo Web Frontend',
      organization: 'Google Actívate',
      description: 'Formación en desarrollo web frontend.',
      date: '2023',
      images: ['assets/CERTIFICADO GOOGLE ACTIVATE (2)_page-0001.jpg']
    },
    {
      name: 'HTML y CSS',
      organization: 'FT PE',
      description: 'Formación en maquetación web con HTML y CSS.',
      date: '2023',
      images: ['assets/FT PE - Certificado_page-0001.jpg']
    }
  ];

  readonly volunteering: VolunteeringExperience[] = [
    {
      name: 'Delegado estudiantil',
      organization: 'Perú Hub Digital 2026',
      description: 'Apoyo en actividades de coordinación, representación y participación durante el evento tecnológico.',
      date: 'Mayo 2026',
      role: 'Representación',
      icon: '♧',
      images: ['assets/Delegado Estudiantil _ Perú Hub certificado-Digital Universitario 2026_page-0001.jpg']
    },
    {
      name: 'Operador informático',
      organization: 'PRONABEC',
      description: 'Soporte técnico a postulantes, supervisión de equipos y resolución de incidencias durante procesos evaluativos.',
      date: 'Jul, Nov - Dic 2024',
      role: 'Soporte técnico',
      icon: '▤',
      images: ['assets/Constancia de voluntariado PRONABEC.jpg']
    }
  ];

  readonly references: ProfessionalReference[] = [
    {
      name: 'Jose Martín Barrutia Trinidad',
      role: 'CEO',
      company: 'JJ Ingenieros (Selva Food)'
    },
    {
      name: 'Nataly Huamán Macedo',
      role: 'Jefa de Departamento',
      company: 'OTI - UNSM'
    },
    {
      name: 'Jorge Luis Chávez Vásquez',
      role: 'Jefe inmediato',
      company: 'OTI - UNSM'
    }
  ];

  activeTab: ReferenceTab = 'certifications';

  get tabs(): { id: ReferenceTab; label: string; count: number }[] {
    return [
      { id: 'certifications', label: 'Certificaciones', count: this.certifications.length },
      { id: 'volunteering', label: 'Voluntariados', count: this.volunteering.length },
      { id: 'references', label: 'Referencias', count: this.references.length }
    ];
  }

  selectTab(tab: ReferenceTab): void {
    this.activeTab = tab;
  }
}
