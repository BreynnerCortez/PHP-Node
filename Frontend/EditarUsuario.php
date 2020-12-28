<html>

<head>
  <title>Consumiendo API</title>
  <link type="text/css" rel="stylesheet" href="style.css">
</head>

<body>
  <?php
    

    //------------ POST ------------
    $Data = array(
        'nombres' => $_REQUEST['nombres'],
        'apellidos' => $_REQUEST['apellidos'],
        'telefono' => $_REQUEST['telefono'],
        'direccion' => $_REQUEST['direccion']
    );

    // Setup cURL
    $ch = curl_init('http://localhost:3014/usuarios/'.rawurlencode($_REQUEST['codigo_usuario']));
    curl_setopt_array($ch, array(
        CURLOPT_POST => TRUE,
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_HTTPHEADER => array(
            'Content-Type: application/json'
        ),
        CURLOPT_POSTFIELDS => json_encode($Data)
    ));

    // Send the request
    $response = curl_exec($ch);

    // Check for errors
    if($response === FALSE){
        die(curl_error($ch));
    }

    // Decode the response
    $responseData = json_decode($response, TRUE);

    // Print the date from the response
    echo $responseData['detail'] . "<br>";
  ?>
</body>

</html>