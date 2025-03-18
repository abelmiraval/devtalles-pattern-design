# Builder Pattern (Patrón Builder)

## Descripción General
El Patrón Builder es un patrón de diseño creacional que permite la construcción de objetos complejos paso a paso. Separa la construcción de un objeto complejo de su representación, permitiendo que el mismo proceso de construcción pueda crear diferentes representaciones.

## Propósito
Este patrón resuelve el problema del anti-patrón conocido como "constructor telescópico" - cuando necesitas crear un objeto con muchos parámetros opcionales, lo que resulta en numerosas sobrecargas de constructores.

## Beneficios Clave

- ✅ **Construir objetos paso a paso:** Construye solo lo que se necesita cuando se necesita
- 🔄 **Reutilizar código de construcción:** Aplica el mismo proceso de construcción para crear diferentes representaciones de objetos
- 📏 **Principio de Responsabilidad Única:** Aísla el código de construcción complejo de la lógica de negocio
- 🧰 **API limpia:** Evita la sobrecarga del constructor con demasiados parámetros
- 📚 **Código más legible y mantenible:** Mejora la comprensión del proceso de creación

## Cuándo Utilizarlo

- 🔧 Cuando necesites crear un objeto con numerosas configuraciones posibles
- 🧩 Cuando la creación de objetos requiere múltiples pasos que deben realizarse en un orden específico
- 🧠 Cuando el algoritmo para crear un objeto complejo debe ser independiente de los componentes y cómo se ensamblan
- 🔄 Cuando los clientes deben poder crear diferentes representaciones del mismo producto
- ⚠️ Cuando quieras evitar constructores con demasiados parámetros opcionales

## Referencias
- [Refactoring Guru: Patrón Builder](https://refactoring.guru/es/design-patterns/builder)
- [Design Patterns for Humans: Builder](https://github.com/kamranahmedse/design-patterns-for-humans#builder)
