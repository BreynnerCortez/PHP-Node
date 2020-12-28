<html>

<head>
  <title>Consumiendo API</title>
  <link type="text/css" rel="stylesheet" href="style.css">
</head>

<body>
  <?php
    //------------ GET ------------
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, 
        'http://localhost:3014/areas'
    );
    $content = curl_exec($ch);
    curl_close($ch);    
    $obj = json_decode($content,true);
    array_to_table($obj);
   

    function array_to_table($matriz) {   
        echo "<table>";
        // Table header
        foreach ($matriz[0] as $clave=>$fila) {
            echo "<th>".$clave."</th>";
        }
        // Table body
        foreach ($matriz as $fila) {
            echo "<tr>";
            foreach ($fila as $elemento) {
                    echo "<td>".$elemento."</td>";
            } 
            echo "</tr>";
        }         
        echo "</table>";
        echo "<br>";
    }

  ?>
</body>

</html>