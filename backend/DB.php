<?php

$pdo = null;

$host = "localhost";

$user = "id16558353_supachok";

$password = "Qwertyui-12345678";

$db = "id16558353_user_register";



function conectar()
{
    try {
        $GLOBALS['pdo'] = new PDO("mysql:host=" . $GLOBALS['host'] . ";dbname=" . $GLOBALS['db'] . "", $GLOBALS['user'], $GLOBALS['password']);
        $GLOBALS['pdo']->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        print "\nError!: " . $e . "<br/>";
        die();
    }
}


function desconectar()
{
    $GLOBALS['pdo'] = null;
}

function metodoGet($query)
{
    try {
        conectar();
        $sentencia = $GLOBALS['pdo']->prepare($query);
        $sentencia->setFetchMode(PDO::FETCH_ASSOC);
        $sentencia->execute();
        desconectar();
        return $sentencia;
    } catch (Exception $e) {
        die("Error: " . $e);
    }
}

function metodoPost($query, $queryAutoIncrement)
{
    try {
        conectar();
        $sentencia = $GLOBALS['pdo']->prepare($query);
        $sentencia->execute();
        $idAutoIncrement = metodoGet($queryAutoIncrement)->fetch(PDO::FETCH_ASSOC);
        $resultado = array_merge($idAutoIncrement, $_POST);
        $sentencia->closeCursor();
        desconectar();
        return $resultado;
    } catch (Exception $e) {
        die("Error: " . $e);
    }
}


function metodoPut($query)
{
    try {
        conectar();
        $sentencia = $GLOBALS['pdo']->prepare($query);
        $sentencia->execute();
        $resultado = array_merge($_GET, $_POST);
        $sentencia->closeCursor();
        desconectar();
        return $resultado;
    } catch (Exception $e) {
        die("Error: " . $e);
    }
}

function metodoDelete($query)
{
    try {
        conectar();
        $sentencia = $GLOBALS['pdo']->prepare($query);
        $sentencia->execute();
        $sentencia->closeCursor();
        desconectar();
        return $_GET['id'];
    } catch (Exception $e) {
        die("Error: " . $e);
    }
}
