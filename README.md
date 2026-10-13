# Portafolio

Portafolio personal desarrollado con Angular 19. Presenta mi perfil, proyectos, logros y datos de contacto en una sola página.

## Secciones

- **Home**: presentación y acceso a mi CV.
- **About**: sobre mí y mis tecnologías.
- **Projects**: proyectos destacados con imágenes.
- **Achievements**: logros y reconocimientos.
- **References**: referencias.
- **Contact**: formulario y datos de contacto.

Incluye además navbar, footer y un carrusel de imágenes reutilizable en `src/app/shared/components`.

## Tecnologías

- Angular 19
- TypeScript
- HTML y CSS
- RxJS

## Requisitos

- Node.js 18 o superior
- npm

## Instalación y uso

```bash
git clone <url-del-repositorio>
cd portafolio
npm install
npm start
```

La app queda disponible en `http://localhost:4200/` y se recarga automáticamente al guardar cambios.

## Scripts

| Comando         | Descripción                                   |
| --------------- | --------------------------------------------- |
| `npm start`     | Servidor de desarrollo                        |
| `npm run build` | Compila para producción en `dist/`            |
| `npm run watch` | Compila en modo desarrollo y observa cambios  |
| `npm test`      | Ejecuta las pruebas unitarias con Karma       |

## Estructura

```
src/
├── app/
│   └── shared/
│       ├── components/   # navbar, footer, image-carousel
│       └── features/     # home, about, projects, achievements, references, contact
├── assets/               # imágenes e iconos
└── styles.css            # estilos globales
```

## CV

Los botones de CV enlazan a mi carpeta de [Google Drive](https://drive.google.com/drive/folders/10pOMq1qYH16mkswSCuZYbu1TxsD5EYC0?hl=es).
