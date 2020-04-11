<?php
session_start();

$obj = new stdClass();
$obj->success = false;

if(isset($_GET["actualBank"])){
	$actualBank = $_GET["actualBank"];
	while($actualBank < 16){
		$actualBank += rand(1,11);
	}
	$obj->result = $actualBank;
	$obj->success = true;
}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($obj);