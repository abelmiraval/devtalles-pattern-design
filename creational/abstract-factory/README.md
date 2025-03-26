# Abstract Factory

## Descripción General
El patrón Abstract Factory es un patrón de diseño creacional que proporciona una interfaz para crear familias de objetos relacionados sin especificar sus clases concretas. Este patrón encapsula un grupo de factories individuales que tienen un tema común, permitiendo crear productos que funcionan juntos de manera coherente.

## Propósito
Abstract Factory resuelve el problema de crear conjuntos de objetos dependientes sin especificar sus clases concretas. Asegura que los objetos creados sean compatibles entre sí, especialmente útil cuando el sistema necesita ser independiente de cómo se crean, componen y representan sus productos.

## Beneficios Clave

- 🧩 **Compatibilidad garantizada**: Asegura que los productos que se crean sean compatibles entre sí.
- 🛡️ **Aislamiento de clases concretas**: El código cliente trabaja solo con interfaces abstractas, sin depender de las implementaciones concretas.
- 🔄 **Facilita cambios entre familias de productos**: Permite cambiar toda una familia de productos simplemente cambiando la fábrica concreta.
- 📏 **Aplicación del Principio de Responsabilidad Única**: Extrae el código de creación a lugares específicos, facilitando el mantenimiento.
- 🔓 **Aplicación del Principio Abierto/Cerrado**: Puedes introducir nuevas variantes de productos sin romper el código existente.

## Cuándo Utilizarlo

- 🏭 Cuando tu código necesita trabajar con diversas familias de productos relacionados.
- 🔄 Cuando una clase no puede anticipar la clase de objetos que debe crear.
- 🧰 Cuando quieres proporcionar una biblioteca de productos sin revelar sus implementaciones.
- 🎨 Cuando necesitas asegurar la compatibilidad entre varios componentes del sistema (como en interfaces gráficas para diferentes sistemas operativos).
- 🛠️ Cuando estás implementando un sistema que debe ser independiente de cómo se crean y componen sus productos.

## Diferencias con Factory Method

| Abstract Factory                                                     | Factory Method                                        |
|----------------------------------------------------------------------|-------------------------------------------------------|
| Proporciona una interfaz para crear familias de objetos relacionados | Define una interfaz para crear un solo tipo de objeto |
| Trabaja a través de composición                                      | Trabaja a través de herencia                          |
| Crea múltiples tipos de objetos                                      | Crea un tipo de objeto                                |
| Enfocado en familias de productos                                    | Enfocado en productos individuales                    |


## Referencias
- [Refactoring Guru: Abstract Factory](https://refactoring.guru/es/design-patterns/abstract-factory)
- [Design Patterns for Humans: Abstract Factory](https://github.com/kamranahmedse/design-patterns-for-humans#-abstract-factory)
