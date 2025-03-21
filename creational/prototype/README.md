# Prototype Pattern

## Descripción General
El Patrón Prototype es un patrón de diseño creacional que permite copiar objetos existentes sin hacer que el código dependa de sus clases. Este patrón delega el proceso de clonación a los propios objetos que están siendo clonados, creando un sistema donde los objetos especifican sus propias reglas para ser copiados.

## Propósito
Este patrón resuelve el problema de crear nuevas instancias de objetos complejos cuando la instanciación directa es costosa, compleja o imposible de realizar debido a dependencias desconocidas o inaccesibles. Mediante la clonación, podemos crear copias de objetos existentes con todas sus propiedades y estados, evitando la complejidad de la creación desde cero.

## Beneficios Clave

- 🧬 **Clonar objetos sin acoplamiento a sus clases**: Reduce la dependencia en clases concretas.
- 🚀 **Reducir código repetitivo de inicialización**: Clonar un objeto es generalmente más eficiente que crearlo y configurarlo desde cero.
- 📦 **Producir copias de objetos preconfigurados**: Crea objetos preparados que sirven como plantillas para futuras copias.
- 🧩 **Alternativa a la herencia**: Proporciona una forma de producir objetos similares sin crear jerarquías de clases complejas.
- 🔄 **Producir objetos en tiempo de ejecución**: Permite crear nuevos objetos con configuraciones que solo están disponibles durante la ejecución.

## Cuándo Utilizarlo

- 🧰 Cuando el código no debe depender de las clases concretas de los objetos que necesitas copiar.
- 🔍 Cuando quieres reducir el número de subclases que solo difieren en la forma en que inicializan sus objetos.
- 🎨 Cuando necesitas crear copias exactas de objetos incluyendo sus estados privados.
- 📝 Cuando la creación de un objeto es más costosa que copiarlo (por ejemplo, un objeto que requiere operaciones de base de datos).
- 🧠 Cuando necesitas instantáneos o estados de un objeto que puedan ser restaurados posteriormente.


## Referencias
- [Refactoring Guru: Patrón Prototype](https://refactoring.guru/es/design-patterns/prototype)
- [Design Patterns for Humans: Prototype](https://github.com/kamranahmedse/design-patterns-for-humans#-prototype)
