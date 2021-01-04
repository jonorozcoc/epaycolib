# epaycolib

Esta libreria tiene como objetivo simplificar el proceso de implementación del procesador de pagos ePayco

## Instalación

Haciendo uso del gestor de paquetes [Composer](https://getcomposer.org/) en la carpeta de tu proyecto

```bash
composer require jonorozcoc/epaycolib
```

Si tu proyecto no está manejado por composer debes agregar la libreria en tu script PHP

```php
require 'vendor/autoload.php';
```

## Inicialización de la libreria

Para hacer uso de la libreria debe importar la clase principal e inicializarla con la configuración

```php
use Epayco\Epayco;

$epayco = new Epayco(array(
    "apiKey" => "TU_LLAVE_PUBLICA",
    "privateKey" => "TU_LLAVE_PRIVADA",
    "language" => "ES",
    "test" => true
));
```

| Variable   | Descripción                                   | Notas                             |
| ---------- | --------------------------------------------- | --------------------------------- |
| apiKey     | La llave publica obtenida del panel de ePayco |                                   |
| privateKey | La llave privada obtenida del panel de ePayco |                                   |
| language   | El lenguaje para la visualización de errores  | ES - EN (Según la última versión) |
| test       | Habilitar el entorno de pruebas               |                                   |

> Si no conoces cuales son tus llaves, revisa [Obtener las credenciales](keys.md)
