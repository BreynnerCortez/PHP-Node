<html>

<head>
  <title>Perfil de usuario</title>
  <link type="text/css" rel="stylesheet" href="style.css">
</head>

<body>
  <?php
    //------------ GET ------------

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    curl_setopt($ch, CURLOPT_URL,         
        'http://localhost:3014/usuarios/'.rawurlencode($_REQUEST['nombre']).'/'.rawurlencode($_REQUEST['clave'])
    );
    $content = curl_exec($ch);
    curl_close($ch);    
    $obj = json_decode($content,true);    
    //array_to_table($obj);
    if($obj[0] ?? null){
        $usuario = $obj[0];
        echo '<h2>Bienvenido Usuario: <br>'.$usuario['nombres'].$usuario['apellidos']."<br> </h2>";
        //array_to_table($obj);
    }else{        
        header("Location: Inicio.php");
    }
  ?>
  
<br>
    <form method="post" action="EditarUsuario.php">
                Nombres:
                <input type="text" value="<?php echo htmlspecialchars($usuario['nombres']); ?>" name="nombres">
                <br>
                Apellidos:
                <input type="text" value="<?php echo htmlspecialchars($usuario['apellidos']); ?>" name="apellidos">
                <br>
                Telefono:
                <input type="number" value="<?php echo htmlspecialchars($usuario['telefono']); ?>" name="telefono">
                <br>
                 Direccion:
                <input type="text" value="<?php echo htmlspecialchars($usuario['direccion']); ?>" name="direccion">
                <br>
                <input type="hidden" name="codigo_usuario" value="<?php echo htmlspecialchars($usuario['codigo_usuario']); ?>">
                <input id="submit" type="submit" value="Editar Datos">
    </form><br><br>
            
  <form method="post" action="EditarGrado.php">
    <button type="submit">Editar<br><i>grados académicos. </i></button>
    <input type="hidden" name="codigo_usuario" value="<?php echo htmlspecialchars($usuario['codigo_usuario']); ?>">
  </form><br>
  <button type="button">Editar<br><i>áreas de desempeño</i></button>
</body>

</html>