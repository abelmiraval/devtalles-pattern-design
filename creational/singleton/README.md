
# Singleton Pattern (Patrón Singleton)

## Descripción General
El Patrón Singleton es un patrón de diseño creacional que garantiza que una clase tenga una única instancia en toda la aplicación y proporciona un punto de acceso global a esa instancia. Controla la creación de objetos para asegurar que solo exista una instancia de la clase, independientemente de dónde se solicite.

## Propósito
Este patrón resuelve dos problemas fundamentales:
1. Asegurar que una clase tenga solo una instancia
2. Proporcionar un punto de acceso global a esa instancia

Es especialmente útil en escenarios donde múltiples instancias podrían causar inconsistencias o un uso ineficiente de recursos, como configuraciones, conexiones a bases de datos, o gestores de estado.

## Beneficios Clave

- 🔒 **Control de Instancia Única**: Garantiza que solo exista una instancia de la clase.
- 🌐 **Acceso Global**: Proporciona un punto de acceso mundial a la instancia.
- 💾 **Carga Perezosa**: Permite crear la instancia solo cuando se necesita.
- 🔄 **Consistencia de Estado**: Mantiene un estado consistente en toda la aplicación.
- 🚀 **Optimización de Recursos**: Evita la creación múltiple de objetos costosos.

## Cuándo Utilizarlo

- 🗃️ Cuando necesites una única instancia de una clase para gestionar un recurso compartido.
- 🔧 Para clases de configuración que requieren un estado global.
- 📡 En conexiones a bases de datos o servicios con instancia única.
- 🧰 Para gestores de estado o servicios que deben ser accesibles globalmente.
- 🔍 Cuando quieras más control sobre las variables globales.

## Variaciones del Patrón

1. **Singleton Básico**: La implementación más simple con inicialización perezosa.
2. **Singleton Thread-Safe**: Garantiza una única instancia en entornos multihilo.
3. **Singleton con Doble Verificación**: Optimiza el rendimiento en la creación de instancias.
4. **Singleton Eager**: Crea la instancia al inicio del programa.
5. **Singleton Usando Módulos**: Aprovecha características de módulos para garantizar unicidad.

## Consideraciones y Advertencias

- ⚠️ Puede hacer que el código sea más difícil de probar debido a su estado global.
- 🧪 Requiere estrategias especiales para pruebas unitarias.
- 🔄 Puede complicar la gestión de dependencias en sistemas grandes.
- 🚫 No siempre es la mejor solución para todos los problemas de instancia única.


## Referencias
- [Refactoring Guru: Patrón Singleton](https://refactoring.guru/es/design-patterns/singleton)
- [Design Patterns for Humans: Singleton](https://github.com/kamranahmedse/design-patterns-for-humans#-singleton)
