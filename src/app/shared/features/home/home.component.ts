import { AfterViewInit, Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ProjectsComponent } from "../projects/projects.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { AchievementsComponent } from '../achievements/achievements.component';
import { ReferencesComponent } from '../references/references.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, ProjectsComponent, AboutComponent, ContactComponent, FooterComponent, AchievementsComponent, ReferencesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

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
