<?php
session_start();

$obj = new stdClass();
$obj->success = false;
$obj->message = "Valid� !";

try {
    $dsn = 'mysql:host=localhost;dbname=rollfxnz_db;charset=utf8';
    $bdd = new PDO($dsn, 'rollfxnz_me', 'maximelepb');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage()); // pas s�curis�
}


if(isset($_GET['username'])) {

    $dbReturn = $bdd->prepare("SELECT * FROM user WHERE username = ?");
    $dbReturn->bindParam(1, $_GET['username']);
    $dbReturn->execute();
    $row = $dbReturn->fetch();

    if(empty($row)) {
        if (isset($_GET['email'])) {
            $dbReturn = $bdd->prepare("SELECT * FROM user WHERE email = ?");
            $dbReturn->bindParam(1, $_GET['email']);
            $dbReturn->execute();
            $row = $dbReturn->fetch();

            if(empty($row)) {
                if (isset($_GET['password']) && isset($_GET['rePassword'])) {
                    $password = sha1($_GET['password']);
                    $rePassword = sha1($_GET['rePassword']);

                    if($password == $rePassword) {
                        $reponse = $bdd->prepare('INSERT INTO user(pseudo, email, password)
                                    VALUES (:username, :email, :password)');

                        $reponse->execute(array(':username' => $_GET['username'],
                                                ':email' => $_GET['email'],
                                                ':password' => $password));

                        $obj->success = true;
                    }
                    else {
                        $obj->message = "Mot de passe non identiques";
                    }
                }
            }
            else {
                $obj->message = "Email d�j� utilis�";
            }
        }
    }
    else {
        $obj->message = "Nom d'utilisateur d�j� utilis�";
    }
}


header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($obj);
echo json_last_error_msg();
var_dump($obj);