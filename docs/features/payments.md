---
id: payments
title: Pagos
---

> Esta función solo aplica para pagos únicos, para pagos recurrentes o suscripciones revisa [Suscripciones](/docs/features/suscriptions)

### Pagar con tarjeta de crédito

Una vez inicializada la instancia de la libreria puede crear un pago de la siguiente forma:

```php
$pay = $epayco->charge->create(array(
    "token_card" => $token->id,
    "customer_id" => $customer->data->customerId,
    "doc_type" => "CC",
    "doc_number" => "numero_documento_cliente",
    "name" => "John",
    "last_name" => "Doe",
    "email" => "example@email.com",
    "bill" => "OR-1234",
    "description" => "Test Payment",
    "value" => "116000",
    "tax" => "16000",
    "tax_base" => "100000",
    "currency" => "COP",
    "dues" => "12",
    "address" => "cr 44 55 66",
    "phone"=> "2550102",
    "cell_phone"=> "3010000001",
    "ip" => "190.000.000.000",  // This is the client's IP, it is required
    "url_response" => "https://tudominio.com/respuesta.php",
    "url_confirmation" => "https://tudominio.com/confirmacion.php",

    //Extra params: These params are optional and can be used by the commerce
    "use_default_card_customer" => true,/*if the user wants to be charged with the card that the customer currently has as default = true*/
    "extras"=> array(
        "extra1" => "data 1",
        "extra2" => "data 2",
        "extra3" => "data 3",
    )
));
```

| Variable | Descripción | Notas |
|----------|-------------|-------|
| token_card | ID del token creado para la tarjeta | Para crear tokens para tarjetas revisar [Tokenización](/docs/features/tokenization) |
| customer_id | ID del cliente | Para obtener la información del cliente revisar [Cliente](/docs/resources/customers) |
| doc_type | Tipo de documento del cliente | Para conocer los valores disponibles revisar [Tipo de documento](/docs/resources/document_types)
| doc_number | Número de documento del cliente | |
| name | Nombre del cliente | |
| last_name | Apellido del cliente | |
| email | Correo electrónico del cliente | |
| bill | ID de la factura | Este identificador es personalizado |
| description | Descripción del pago | |
| value | Monto del pago | |
| tax | Monto en IVA | Si no aplica enviar 0 |
| tax_base | Monto base de calculo de IVA | |
| currency | Divisa de pago | |
| dues | Número de cuotas | |
| address | Dirección del cliente | |
| test | Modalidad de operación | Pruebas o Producción |
| cell_phone | Número de celular del cliente | |
| url_confirmation | URL de confirmación de la transacción | |
| url_response | URL de respuesta de transacción | |