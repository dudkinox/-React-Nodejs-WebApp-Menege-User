<?php

include 'backend/DB.php';

header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['ID_student'])) {
        $query = "select * from User_info where ID_student=" . $_GET['ID_student'];
        $resultado = metodoGet($query);
        echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    } else {
        $query = "select * from User_info";
        $resultado = metodoGet($query);
        echo json_encode($resultado->fetchAll());
    }
    // header("HTTP/1.1 200 OK");
    exit();
}

if ($_POST['METHOD'] == 'POST') {
    unset($_POST['METHOD']);
    $Email = $_POST['Email'];
    $Name = $_POST['Name'];
    $Gender = $_POST['Gender'];
    $query = "insert into User_info(Email, Name, Gender) values ('$Email', '$Name', '$Gender')";
    $queryAutoIncrement = "select MAX(ID_student) as ID_student from User_info";
    $resultado = metodoPost($query, $queryAutoIncrement);
    echo json_encode($resultado);
    // header("HTTP/1.1 200 OK");
    exit();
}

if ($_POST['METHOD'] == 'PUT') {
    unset($_POST['METHOD']);
    $ID_student = $_GET['ID_student'];
    $Email = $_POST['Email'];
    $Name = $_POST['Name'];
    $Gender = $_POST['Gender'];
    $query = "UPDATE User_info SET Email='$Email', Name='$Name', Gender='$Gender' WHERE ID_student='$ID_student'";
    $resultado = metodoPut($query);
    echo json_encode($resultado);
    // header("HTTP/1.1 200 OK");
    exit();
}


if ($_POST['METHOD'] == 'DELETE') {
    unset($_POST['METHOD']);
    $ID_student = $_GET['ID_student'];
    $query = "DELETE FROM User_info WHERE ID_student='$ID_student'";
    $resultado = metodoDelete($query);
    echo json_encode($resultado);
    // header("HTTP/1.1 200 OK");
    exit();
}
// header("HTTP/1.1 400 Bad Request");
// echo 'มีปัญหา โปรดแจ้งศุภโชคนะจ๊ะ หรือสวดมนต์';
