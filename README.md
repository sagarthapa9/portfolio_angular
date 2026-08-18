# Portfolio — Sagar Thapa

A personal portfolio website built with **Angular 14**, showcasing the work, skills, and contact details of **Sagar Thapa**, a Full Stack Software Developer with 8+ years of experience.

## Table of Contents

- [About the Application](#about-the-application)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Local Setup](#local-setup)
- [Angular CLI Commands](#angular-cli-commands)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## About the Application

This is a single-page portfolio application that presents Sagar's professional background. The page is organised into the following sections:

- **About** — a hero/intro section with a brief personal introduction.
- **Portfolio** — a list of projects he has worked on, each with a description, the technologies used, and a link to the live product:
  - [vinCARRIER](https://www.vincarrier.com/) — a web & mobile Transport Management System (TMS) for UK and US carriers.
  - [vinDISPATCH](https://www.cardeliverynetwork.com/#vindispatch) — an online marketplace connecting vehicle transport companies with dealerships and OEMs.
  - [Exerwise fitness coach](https://play.google.com/store/apps/details?id=com.exerwise.ai) — an Android fitness app using TensorFlow.js (PoseNet) for real-time exercise tracking.
  - [ScreenHits TV](https://screenhitstv.com/) — a central hub for streaming and discovering television content.
- **SkillSet** — a skill graph showing expertise across C#, ServiceStack, Angular/JavaScript, HTML/CSS, SQL, Ionic, Android, and Firebase.
- **Contact Me** — links to [GitHub](https://github.com/sagarthapa9) and [LinkedIn](https://www.linkedin.com/in/sagar-thapa-3b081542/), plus an email address.

## Features

- Responsive, single-page layout built with **Bootstrap 5**.
- Fixed navigation bar that highlights the active section and follows the scroll position.
- Smooth scrolling between sections (`ViewportScroller`).
- Material Icons and Google Fonts (Roboto) for typography and icons.
- Dark hero section with a light content area.

## Tech Stack

| Layer          | Technology                                                       |
| -------------- | ---------------------------------------------------------------- |
| Framework      | [Angular](https://angular.io/) 22                                  |
| Language       | [TypeScript](https://www.typescriptlang.org/) ~6.0                 |
| Styling        | SCSS + [Bootstrap](https://getbootstrap.com/) 5.3                  |
| UI Components  | [Angular Material](https://material.angular.io/) 22 (CDK + prebuilt theme) |
| Animations     | [@angular/animations](https://angular.io/guide/animations)         |
| Routing        | [@angular/router](https://angular.io/guide/router)                 |
| Package Manager| [npm](https://www.npmjs.com/)                                     |
| Testing        | Karma + Jasmine                                                   |
| Build Tool     | [Angular CLI](https://angular.io/cli) 22.1 (application builder)   |

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) **22.22.3+, 24.15.0+, or 26+** (Angular 22 requires Node ^22.22.3 || ^24.15.0 || >=26.0.0)
- [npm](https://www.npmjs.com/) (ships with Node.js)
- [Angular CLI](https://angular.io/cli) **22.1.x** (install globally if not present)

> **Note:** This project uses Angular **22** with the modern `application` build system. Use a matching CLI version to avoid build issues.

## Local Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd portfolio_angular
   ```

2. **Install the Angular CLI (22.1.x)**

   ```bash
   npm install -g @angular/cli@22.1.4
   ```

3. **Install project dependencies**

   ```bash
   npm install
   ```

4. **Run the development server**

   ```bash
   ng serve
   ```

   Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Angular CLI Commands

| Command                                   | Description                                                        |
| ----------------------------------------- | ------------------------------------------------------------------ |
| `ng serve`                                | Start the development server at `http://localhost:4200/`            |
| `ng serve --open` (or `-o`)               | Start the dev server and open the app in the browser                |
| `ng serve --port 5000`                    | Start the dev server on a custom port                               |
| `ng build`                                | Build the project (production by default) → outputs to `dist/`      |
| `ng build --configuration development`    | Build with the development configuration                            |
| `ng test`                                 | Run unit tests via [Karma](https://karma-runner.github.io)           |
| `ng generate component <name>`            | Scaffold a new component                                             |
| `ng generate directive|pipe|service`      | Scaffold other Angular building blocks                               |
| `ng add <package>`                        | Add a package to the project (e.g. `@angular/material`)              |
| `ng update`                               | Update Angular dependencies to newer versions                        |
| `ng help`                                 | Show help for Angular CLI commands                                   |

> `npm run start`, `npm run build`, and `npm run test` are aliases for `ng serve`, `ng build`, and `ng test` respectively — they are defined in [`package.json`](package.json).

## Project Structure

```
src/
├── app/
│   ├── home/                # HomeComponent — main landing page with all sections
│   ├── portfolio/           # PortfolioComponent (presentational)
│   ├── app-routing.module.ts  # Routes: '' → HomeComponent
│   ├── app.component.*      # Root component
│   └── app.module.ts        # Root module
├── assets/
│   └── images/              # Project screenshots and social icons
├── environments/            # environment.ts / environment.prod.ts
├── index.html               # App shell (loads Google Fonts & Material Icons)
├── main.ts                  # Application bootstrap
├── polyfills.ts
├── styles.scss              # Global styles (Bootstrap + global overrides)
└── test.ts
```

## Contributing

This is a personal portfolio project, but feedback and suggestions are always welcome. Feel free to open an issue or submit a pull request.

## License

All content and assets in this repository belong to Sagar Thapa unless otherwise stated.
