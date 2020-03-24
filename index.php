<?php ?>

<!DOCTYPE html>
<html>
	<head>
		<title>ON TEST</title>
		<link rel="stylesheet" type="text/css" href="style.css">
		<link href="https://fonts.googleapis.com/css?family=MedievalSharp&display=swap" rel="stylesheet">
	</head>
	<body>
		<div>
			<h1>Register</h1> 
			<p id="message"></p>
			<form id="sign" method="GET" action="PHP/signUp.php">
				<input type="text" name="username" placeholder="Pseudo">
				<input type="email" name="email" placeholder="Email">
				<input type="password" name="password" placeholder="Mot de passe">
				<input type="password" name="rePassword" placeholder="Encore le mot de passe">
				<input type="submit" content="Submit">
			</form>
		</div>			
			
		<header>
			<div id="dices">
				<img id="4" class="des" src="img/d4.png">
				<img id="6" class="des" src="img/d6.png">
				<img id="8" class="des" src="img/d8.png">
				<img id="12" class="des" src="img/d12.png">
				<img id="20" class="des" src="img/d20.png">
			</div>
			<div id="buttons">
				<p id="register"> Register </p>
				<p id="log"> Log In </p>
			</div>
		</header>
		<div id="board">
			<p id="result"></p>
		</div>
		<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
		<script src="JS/main.js"></script>
	</body>

</html>