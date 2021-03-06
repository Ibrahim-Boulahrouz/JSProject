<?php
session_start();

$obj = new stdClass();
$obj->success = false;
$obj->message = "Mauvais identifiant ou mot de passe";

try {
    $dsn = 'mysql:host=localhost;dbname=rollfxnz_db;charset=utf8';
    $bdd = new PDO($dsn, 'rollfxnz_me', 'maximelepb');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage()); // pas s�curis�
}

if(!empty($_POST['username']) && !empty($_POST['password'])) {

    $reponse = $bdd->prepare('SELECT * FROM user WHERE username = :username AND password = :password');

    $reponse->execute(array(':username' => $_POST['username'], ':password' => sha1($_POST['password'])));
    $results = $reponse->fetchAll();

    if ($reponse->rowCount() > 0) {
        $obj->success =true;

        foreach ($results as $rows) {
            $_SESSION['user'] = $rows["user_id"];
        }
    }
}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($obj);
