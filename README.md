# DevTalles Pattern Design

## Install

* [Visual Studio Code](https://code.visualstudio.com/) - Editor de código recomendado
* [Deno](https://deno.com/) - Runtime para JavaScript y TypeScript
  * (Opcional) [Bun](https://bun.sh/) - Runtime alternativo
* [Git](https://git-scm.com/) - Sistema de control de versiones
  ```bash
  git config --global user.name "Tu nombre"
  git config --global user.email "Tu correo"
  ```

## Extension vs-code

### Tools

* 🔍 [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) - Resalta errores en el código
* 🦕 [Deno Official](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno) - Soporte oficial para Deno
* 💬 [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) - Mejora la visualización de comentarios

### Theme vs-code:

* 🌃 [Tokyo Night](https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night) - Tema oscuro estilizado
* 🎨 [Iconos - Bearded Icons](https://marketplace.visualstudio.com/items?itemName=BeardedBear.beardedicons) - Pack de iconos

## Resources

* 📚 [Refactoring Guru](https://refactoring.guru/es/design-patterns/catalog) - Catálogo completo de patrones
* 📘 [Design Patterns for Humans](https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file) - Guía simplificada
* 🔧 [Patterns.dev](https://www.patterns.dev/) - Patrones modernos para desarrollo web
* ☕ [Java Design Patterns](https://github.com/iluwatar/java-design-patterns) - Implementaciones en Java
* 📐 [Design Patterns TypeScript](https://github.com/torokmark/design_patterns_in_typescript?tab=readme-ov-file) - Implementaciones en TypeScript

## Patterns design (Soluciones probadas a problemas comunes)

### What are design patterns?

Son soluciones reutilizables y probadas que ayudan a resolver problemas comunes.

### Advantages

* ✅ **Soluciones probadas** - Permite evitar errores conocidos.
* 🗣️ **Comunicación efectiva** - Establece un lenguaje común entre los desarrolladores.
* 🧹 **Calidad de código** - Resuelven el problema con un código más limpio y efectivo.
* 📚 **Facilita aprendizaje** - Sirven de guía y ayuda a comprender conceptos.
* 📏 **Estandarización** - Al aplicar patrones conocidos, aplicamos consistencias en el código.
* ⚙️ **No reinventas la rueda** - Ayuda a enfocarte en el problema sin tener que planificar la estrategia de cero.

### Types of design patterns

#### Creational
> Ayudan a crear objetos de manera eficiente y flexible, ocultando los detalles de instanciación.

Resuelven problemas relacionados con:

> ¿Cómo crear objetos de manera eficiente?  
> Ocultar la lógica de instanciación  
> Reducir el acoplamiento de clases.

* 🏭 **Factory Method**
* 🔧 **Abstract Factory**
* 👷 **Builder**
* 🧬 **Prototype**
* 🛠️ **Factory Function**
* 🔒 **Immutable**
* 👑 **Singleton**

#### Behavioral
> Definen cómo los objetos interactúan y se comunican para cumplir tareas complejas

* 👀 **Observer**
* 🎯 **Strategy**

#### Structural
> Enfocados en cómo componer clases u objetos para formar estructuras más grandes y reutilizables.

* 🔌 **Adapter**
* 🎁 **Decorator**


## Run with Node

```bash
npx tsx 01-builder-main.ts
```