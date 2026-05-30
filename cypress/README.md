# QA-Automation-XAcademy2026

¡Bienvenido/a! Este repositorio está dedicado a centralizar mis prácticas, proyectos y notas de aprendizaje sobre **QA Automation** utilizando **Cypress**. El objetivo principal es dominar las funcionalidades más relevantes de la herramienta y aplicar buenas prácticas de automatización de pruebas de software.

---

## 🎯 Objetivos del Repositorio

* **Dominar Cypress:** Aprender desde los conceptos básicos hasta configuraciones avanzadas.
* **Buenas Prácticas:** Implementar patrones de diseño como *Page Object Model (POM)* o *App Actions*.
* **Automatización Web Completa:** Practicar interactuando con diferentes elementos de la UI (inputs, dropdowns, modales, tablas, etc.).
* **Pruebas de API:** Utilizar Cypress para realizar pruebas de integración y verificar endpoints.

---

## 🛠️ Tecnologías y Herramientas

* **Framework de Pruebas:** [Cypress](https://www.cypress.io/)
* **Lenguaje de Programación:** JavaScript / TypeScript
* **Entorno de Ejecución:** Node.js
* **Reportes:** Mocha Awesome Reporter (o el que decidas usar)

---

## 📂 Estructura del Proyecto

La estructura interna del directorio `cypress/` se organiza de la siguiente manera para mantener el proyecto escalable:

```text
├── cypress/
│   ├── e2e/               # Aquí residen los archivos de prueba (.cy.js)
│   │   ├── 01-basics/     # Pruebas básicas (locators, interacciones simples)
│   │   ├── 02-advanced/   # Manejo de waits, alerts, iframes, file uploads
│   │   └── 03-api/        # Pruebas de API (cy.request)
│   ├── fixtures/          # Archivos de datos estáticos (JSON) para pruebas (Data-Driven)
│   ├── page-objects/      # Clases del patrón Page Object Model (si se aplica)
│   └── support/           # Comandos personalizados (commands.js) y configuraciones globales
├── cypress.config.js      # Archivo de configuración de Cypress
├── package.json           # Dependencias y scripts del proyecto
└── README.md
a