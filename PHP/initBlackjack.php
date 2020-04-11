<?php
session_start();

$obj = new stdClass();
$obj->success = false;
 
$card = rand(1,11);
$obj->resultPlayer = $card;
$card = rand(1,11);
$obj->resultBank = $card;
$obj->success = true;

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($obj);