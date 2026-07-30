# dev_cheatsheet

Landing page interactiva con comandos de desarrollo web. Tema **Monokai** / **Ámbar**, construida con **Bootstrap 5** + **Bootstrap Icons** + **Devicon**.

➡️ **Live:** [https://maxuber79.github.io/comandos-desarrollo-web/](https://maxuber79.github.io/comandos-desarrollo-web/)

## 📚 Categorías

11 categorías · ~260 comandos listos para copiar:

| # | Categoría | Comandos |
|---|-----------|----------|
| 1 | Git | 75 |
| 2 | Node.js & NPM | 20 |
| 3 | NVM | 8 |
| 4 | TypeScript | 8 |
| 5 | Angular CLI | 36 |
| 6 | NestJS | 12 |
| 7 | Firebase & AngularFire | 8 |
| 8 | Vite | 5 |
| 9 | **Cloud Foundry** | 43 |
| 10 | SAP Fiori & BAS | 30 |
| 11 | Extras & Carpetas | 21 |

## 🚀 Stack

| Herramienta | Uso |
|-------------|-----|
| Bootstrap 5.3 | Layout y componentes base |
| Bootstrap Icons | Iconos para UI |
| Devicon | Iconos de herramientas (Git, Angular, NestJS, etc.) |
| Sass | Compilación de estilos custom |
| GitHub Pages + Actions | Deploy automático |

## 📦 Instalación

```bash
npm install
npm run build
```

## 🧑‍💻 Desarrollo

```bash
npm run dev       # build + watch SCSS
npm run build     # vendor + SCSS compilado
npm run copy:vendor  # copia Bootstrap local a /assets/vendor
```

## 📁 Estructura

```
├── index.html                   # Landing principal
├── _config.yml                  # Config GitHub Pages
├── package.json
├── .github/workflows/deploy.yml # CI/CD automático
├── scss/
│   ├── styles.scss              # Entry point (importa Bootstrap)
│   ├── _variables.scss          # Variables SCSS
│   ├── _theme-vars.scss         # CSS Custom Props (Monokai / Ámbar)
│   ├── _components.scss         # Componentes custom
│   ├── _syntax.scss             # Syntax highlighting
│   └── _responsive.scss         # Breakpoints
├── js/
│   ├── app.js                   # Render, copy, search, theme toggle
│   └── comandos.json            # Base de datos de comandos (~240)
└── assets/
    ├── css/styles.min.css       # CSS compilado
    ├── vendor/                  # Bootstrap local (libre de CDN)
    └── img/favicon.svg
```

## 🌐 Deploy

Cada push a `main` ejecuta el workflow de GitHub Actions y publica automáticamente en GitHub Pages.

---

<p align="center">
  Hecho con 💜 por <strong>WEBMAIN</strong>
</p>
