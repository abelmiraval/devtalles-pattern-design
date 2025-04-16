# Factory Function Pattern (Patrón Factory Function)

## Descripción General
El Patrón Factory Function es un patrón de diseño creacional que encapsula la lógica de creación de objetos en funciones dedicadas, permitiendo crear diferentes tipos de objetos sin exponer la lógica de inicialización al cliente. A diferencia del patrón Factory Method tradicional orientado a clases, las Factory Functions aprovechan la naturaleza de las funciones de primera clase en lenguajes como JavaScript para crear objetos sin necesidad de usar constructores o la palabra clave `new`.

## Propósito
Este patrón resuelve varios problemas fundamentales:
1. Encapsular la lógica de creación de objetos en una única ubicación
2. Permitir crear diferentes tipos de objetos basados en parámetros o condiciones
3. Ocultar la complejidad de la inicialización de objetos
4. Implementar un mecanismo de creación flexible sin recurrir a la herencia de clases

Es especialmente valioso en lenguajes funcionales o que combinan paradigmas como JavaScript, donde se prefiere la composición sobre la herencia.

## Beneficios Clave

- 🧩 **Encapsulamiento**: Oculta los detalles de implementación mediante closures.
- 🔒 **Privacidad de Datos**: Permite crear "variables privadas" que no son accesibles desde fuera.
- 🔄 **Flexibilidad**: Facilita la creación de objetos configurables dinámicamente.
- 🧰 **Composición**: Promueve un diseño basado en la composición de comportamientos.
- 🚀 **Testabilidad**: Simplifica la creación de mocks y objetos de prueba.

## Cuándo Utilizarlo

- 🏭 Cuando necesites centralizar la lógica de creación de objetos similares pero con variaciones.
- 🔧 Para implementar un sistema de plugins o componentes extensibles.
- 📦 En situaciones donde prefieres la composición sobre la herencia de clases.
- 🧪 Cuando deseas facilitar las pruebas mediante la inyección de dependencias.
- 🔍 Para proporcionar una API clara y específica para la creación de objetos complejos.

## Variaciones del Patrón

1. **Factory Function Simple**: Función que devuelve un objeto con propiedades y métodos.
2. **Factory Function Parametrizada**: Acepta parámetros para personalizar los objetos creados.
3. **Factory Function con Closure**: Aprovecha los closures para encapsular estado privado.
4. **Factory Function Condicional**: Crea diferentes tipos de objetos según condiciones o parámetros.
5. **Módulo Revelador**: Un patrón relacionado que devuelve solo las partes públicas de un módulo.

## Consideraciones y Advertencias

- ⚠️ Puede llevar a un mayor consumo de memoria si cada objeto creado tiene sus propias copias de métodos.
- 🔄 La implementación difiere significativamente entre lenguajes orientados a objetos tradicionales y lenguajes funcionales.
- 🧪 No es adecuado para situaciones donde necesitas verificar el tipo de instancia con operadores como `instanceof`.
- 🚫 En sistemas complejos, podría ser necesario combinarlo con otros patrones como Abstract Factory o Builder.

## Comparación con Factory Method Tradicional

| Factory Function            | Factory Method Tradicional                 |
|-----------------------------|--------------------------------------------|
| Utiliza funciones simples   | Basado en clases y herencia                |
| No requiere `new`           | Utiliza constructores con `new`            |
| Favorece la composición     | Favorece la herencia                       |
| Ideal en JS, Python         | Común en Java, C#, C++                     |
| Encapsula mediante closures | Encapsula mediante modificadores de acceso |

## Referencias
- [Refactoring Guru: Factory Method](https://refactoring.guru/es/design-patterns/factory-method)
- [Design Patterns for Humans: Factory Method](https://github.com/kamranahmedse/design-patterns-for-humans#-factory-method)
- [JavaScript Design Patterns: Factory Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript)