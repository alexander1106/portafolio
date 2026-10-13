import { AfterViewInit, Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ProjectsComponent } from "../projects/projects.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { AchievementsComponent } from '../achievements/achievements.component';
import { ReferencesComponent } from '../references/references.component';

interface EditorFile {
  name: string;
  icon: string;
  language: string;
  content: string;
}

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, ProjectsComponent, AboutComponent, ContactComponent, FooterComponent, AchievementsComponent, ReferencesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  readonly files: [EditorFile, EditorFile, EditorFile] = [
    {
      name: 'Profile.ts',
      icon: '</>',
      language: 'TypeScript',
      content: `// Perfil profesional: Alexander Gaslac
export const softwareEngineer = {
  name: "Jose Alexander Gaslac Mas",
  role: "Backend Developer Java Junior",
  education: {
    faculty: "Ingeniería de Sistemas e Informática",
    university: "Universidad Nacional de San Martín",
    cycle: "X Ciclo",
    honors: ["Décimo Superior", "Beca Permanencia - PRONABEC"]
  },
  coreStack: {
    frontend: ["Angular", "TypeScript"],
    backend: ["Java 17", "Spring Boot", "Spring Security", "Spring Data JPA"],
    apis: ["REST", "Swagger / OpenAPI"],
    database: ["SQL Server", "MySQL"],
    cloud: ["Microsoft Azure", "Docker", "Google Cloud", "Firebase"]
  },
  focus: "Software escalable y de calidad"
};`
    },
    {
      name: 'Projects.java',
      icon: '▣',
      language: 'Java',
      content: `// Desarrollo backend y servicios REST
@SpringBootApplication
public class PortfolioProjects {
  public static void main(String[] args) {
    SpringApplication.run(
      PortfolioProjects.class, args
    );
  }

  // APIs, microservicios y software empresarial
  // Java · Spring Boot · SQL Server
}`
    },
    {
      name: 'AIModels.py',
      icon: '⚙',
      language: 'Python',
      content: `# Inteligencia artificial aplicada
modelos = {
    "bioheart": {
        "area": "Deep Learning + ECG",
        "objetivo": "Detección de arritmias",
    },
    "plania": {
        "area": "Visión por computadora",
        "objetivo": "Identificación de especies",
    },
}

stack = ["Python", "TensorFlow", "ResNet50"]`
    }
  ];
  activeFileIndex = 0;
  copyMessage = '';

  get activeFile(): EditorFile {
    return this.files[this.activeFileIndex];
  }

  selectFile(index: number): void {
    if (index < 0 || index >= this.files.length) {
      return;
    }

    this.activeFileIndex = index;
    this.copyMessage = '';
  }

  async copyCode(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.activeFile.content);
      this.copyMessage = 'Copiado';
      window.setTimeout(() => {
        this.copyMessage = '';
      }, 1800);
    } catch {
      this.copyMessage = 'No se pudo copiar';
    }
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    );

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
  }

}
