<?php
    // echo "hola, respuesta desde el servidor";
    // var_dump($_FILES);

    if(isset($_FILES["files"])){
        $name = $_FILES["file"]["name"];
        $file = $_FILES["file"]["tmp_name"];
        $error = $_FILES["file"]["error"];
        $destination = "../files/$name";

        $upload = move_uploaded_file($_FILES, $destination);

        if($upload){
            $res = array(
                "err" => false,
                "status" => http_response_code(200),
                "statusText" => "Archivo $name subido correctamente",
                "files" => $_FILES["file"]
            );
        }else{
            $res = array(
                "err" => true,
                "status" => http_response_code(400),
                "statusText" => "ERROR al subir el archivo $name",
                "files" => $_FILES["file"]
            );
        }

        echo json_decode($res);

    }