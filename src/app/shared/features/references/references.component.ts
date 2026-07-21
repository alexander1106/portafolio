import { Component } from '@angular/core';

interface Reference {
  name: string;
  role: string;
  company: string;
  icon: string;
}

@Component({
  selector: 'app-references',
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})
export class ReferencesComponent {

  references: Reference[] = [
    {
      name: 'Jose Martín Barrutia Trinidad',
      role: 'CEO',
      company: 'JJ Ingenieros (Selva Food)',
      icon: 'fa-user-tie'
    },
    {
      name: ' Jorge Luis Chávez Vásquez',
      role: 'Jefe de Área',
      company: 'OTI-UNSM',
      icon: 'fa-user-gear'
    },
    {
      name: 'Nataly Huamán Macedo',
      role: 'Jefa de Departamento',
      company: 'OTI - UNSM',
      icon: 'fa-user-shield'
    }
  ];

}
