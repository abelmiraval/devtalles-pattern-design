# Factory Method

## Descripción General
El patrón Factory Method es un patrón de diseño creacional que proporciona una interfaz para crear objetos en una superclase, pero permite a las subclases alterar el tipo de objetos que se crearán. Define una interfaz para crear un objeto, pero deja que las subclases decidan qué clase instanciar.

## Propósito
El Factory Method resuelve el problema de crear objetos de producto sin especificar sus clases concretas. Permite que una clase delegue la responsabilidad de instanciación a sus subclases, promoviendo el acoplamiento débil entre el creador y los productos concretos.

## Beneficios Clave

- 🔄 **Principio de Responsabilidad Única**: Mueve el código de creación de productos a un solo lugar, facilitando el soporte del código.
- 🔌 **Principio de Abierto/Cerrado**: Puedes introducir nuevos tipos de productos sin romper el código existente.
- 🛡️ **Desacoplamiento**: El código cliente no necesita conocer las clases concretas de los productos.
- 🧩 **Flexibilidad**: Permite agregar nuevos productos sin modificar el código existente.
- 🔍 **Testabilidad**: Facilita la prueba del código mediante la creación de mocks de las clases de producto.

## Cuándo Utilizarlo

- 🏗️ Cuando no sabes de antemano las dependencias exactas y tipos de objetos con los que debe trabajar tu código.
- 🧰 Cuando quieres proporcionar a los usuarios de tu biblioteca o framework una forma de extender sus componentes internos.
- 📦 Cuando deseas reutilizar objetos existentes en lugar de reconstruirlos cada vez.
- 🔧 Cuando necesitas crear diferentes variantes de un producto sin modificar el código cliente.
- 🌟 Cuando quieres implementar un sistema de plugins o extensiones donde los usuarios pueden agregar nuevas funcionalidades.

## Referencias
- [Refactoring Guru: Factory Method](https://refactoring.guru/es/design-patterns/factory-method)
- [Design Patterns for Humans: Factory Method](https://github.com/kamranahmedse/design-patterns-for-humans#-factory-method)
