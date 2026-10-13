import { Component } from '@angular/core';

interface Skill {
  name: string;
  logo?: string;
}

interface SkillGroup {
  title: string;
  category: string;
  description: string;
  icon: string;
  color: string;
  skills: Skill[];
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly skillCategories = [
    { id: 'all', label: 'Todo el Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Bases de Datos' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'ai-mobile', label: 'IA & Mobile' },
    { id: 'methodologies', label: 'Metodologías' }
  ];

  readonly skillGroups: SkillGroup[] = [
    {
      title: 'Frontend',
      category: 'frontend',
      description: 'Tecnologías frontend incluidas en mi experiencia y proyectos.',
      icon: '▱',
      color: 'green',
      skills: [
        { name: 'Angular', logo: '/assets/angular.webp' },
        { name: 'TypeScript', logo: '/assets/Typescript_logo_2020.svg.png' },
        { name: 'JavaScript', logo: '/assets/javascript.png' }
      ]
    },
    {
      title: 'Backend',
      category: 'backend',
      description: 'Desarrollo backend enfocado en Java, Spring Boot y servicios REST.',
      icon: '▤',
      color: 'blue',
      skills: [
        { name: 'Java', logo: '/assets/java.png' },
        { name: 'Spring Boot · Security (JWT) · Data JPA · REST', logo: '/assets/Spring_Boot.svg.png' },
        { name: 'Maven', logo: '/assets/maven.svg' },
        { name: 'C# / .NET', logo: '/assets/csharp-original.svg' },
        { name: 'Python · FastAPI', logo: '/assets/python.png' }
      ]
    },
    {
      title: 'Bases de Datos',
      category: 'database',
      description: 'Motores de datos utilizados en sistemas y proyectos.',
      icon: '▤',
      color: 'green',
      skills: [
        { name: 'SQL Server', logo: '/assets/sqlserve.png' },
        { name: 'MySQL', logo: '/assets/mysql.png' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      category: 'cloud',
      description: 'Servicios y herramientas de nube y contenedorización.',
      icon: '☁',
      color: 'blue',
      skills: [
        { name: 'Microsoft Azure', logo: '/assets/azure.png' },
        { name: 'Docker', logo: '/assets/docker.png' },
        { name: 'Google Cloud', logo: '/assets/googlecloud-original.svg' },
        { name: 'Firebase', logo: '/assets/firebase.png' }
      ]
    },
    {
      title: 'IA & Mobile',
      category: 'ai-mobile',
      description: 'Herramientas utilizadas en proyectos de inteligencia artificial y aplicaciones móviles.',
      icon: '✳',
      color: 'blue',
      skills: [
        { name: 'TensorFlow / Keras', logo: '/assets/tensorflow-original.svg' },
        { name: 'ResNet50' },
        { name: 'Flutter', logo: '/assets/flutter-original.svg' }
      ]
    },
    {
      title: 'Metodologías & Control de Versiones',
      category: 'methodologies',
      description: 'Prácticas de trabajo colaborativo y organización de proyectos.',
      icon: '↗',
      color: 'green',
      skills: [
        { name: 'Scrum / Kanban' },
        { name: 'Git / GitHub', logo: '/assets/github.png' },
        { name: 'GitFlow' }
      ]
    }
  ];

  activeSkillCategory = 'all';

  get visibleSkillGroups(): SkillGroup[] {
    return this.activeSkillCategory === 'all'
      ? this.skillGroups
      : this.skillGroups.filter(group => group.category === this.activeSkillCategory);
  }

  setSkillCategory(category: string): void {
    this.activeSkillCategory = category;
  }
}
