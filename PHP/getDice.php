<?php
session_start();

$obj = new stdClass();
$obj->success = false;

if(!empty($_GET['diceId'])) {
	if($_GET['diceId'] == 4){
		$dice = rand(1,4);
		$obj->result = $dice;
		$obj->success = true;
	}
	if($_GET['diceId'] == 6){
		$dice = rand(1,6);
		$obj->result = $dice;
		$obj->success = true;
	}
	if($_GET['diceId'] == 8){
		$dice = rand(1,8);
		$obj->result = $dice;
		$obj->success = true;
	}
	if($_GET['diceId'] == 12){
		$dice = rand(1,12);
		$obj->result = $dice;
		$obj->success = true;
	}
	if($_GET['diceId'] == 20){
		$dice = rand(1,20);
		$obj->result = $dice;
		$obj->success = true;
	}
}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($obj);