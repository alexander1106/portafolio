import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  readonly consultationReasons = [
    'Oportunidad Laboral / Prácticas',
    'Proyecto de Software',
    'Consulta General'
  ];

  contactName = '';
  contactEmail = '';
  consultationType = this.consultationReasons[0];
  message = '';
  copiedContact = '';
  copyError = '';
  copyStatus = '';

  async copyContact(value: string, type: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(value);
      this.copiedContact = type;
      this.copyError = '';
      this.copyStatus = type === 'email' ? 'Correo copiado.' : 'Número de WhatsApp copiado.';
      window.setTimeout(() => {
        this.copiedContact = '';
        this.copyStatus = '';
      }, 1800);
    } catch {
      this.copyError = type;
      this.copyStatus = 'No se pudo copiar el contacto.';
      window.setTimeout(() => {
        this.copyError = '';
        this.copyStatus = '';
      }, 2500);
    }
  }

  sendToWhatsApp(): void {
    const text = [
      `Hola Alexander, soy ${this.contactName}.`,
      `Mi correo: ${this.contactEmail}`,
      `Motivo: ${this.consultationType}`,
      `Mensaje: ${this.message}`
    ].join('\n');
    const url = `https://wa.me/51900414695?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
