<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Editar Grado</title>
</head>
<body>
<form>
    <select>
        <option selected="selected">Elija un grado</option>
        <?php
        //------------ GET ------------
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL, 
            'http://localhost:3014/getgrados'
        );
        $content = curl_exec($ch);
        curl_close($ch);    
        $obj = json_decode($content,true);
        $grados = $obj;
        
            foreach ($obj as $fila) {
                foreach ($fila as $elemento) {
            echo "<option value='strtolower($elemento)'>$elemento</option>";
                } 
            }         
        
        ?>
    </select>
    <input type="textarea" value="Descripcion">
    <input type="submit" value="Agregar Grado">
</form>
</body>
</html>