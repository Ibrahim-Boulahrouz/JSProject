<?php ?>

<!DOCTYPE html>
<html>
	<head>
		<title>Roll The Dice</title>
		<link rel="stylesheet" type="text/css" href="JS_css/style.css">
		<link href="https://fonts.googleapis.com/css?family=MedievalSharp&display=swap" rel="stylesheet">
	</head>
	<body>
		<div id="decoreco">		
			<form class="form" id="sign" method="GET" action="PHP/SignUP.php">
				<h1>Register</h1> 
				<p id="message"></p>
				<input type="text" name="username" placeholder="Pseudo" required>
				<input type="email" name="email" placeholder="Email" required>
				<input type="password" name="password" placeholder="Mot de passe" required>
				<input type="password" name="rePassword" placeholder="Encore le mot de passe" required>
				<input type="submit" content="Submit">
			</form>
			<form class="form" id="logForm" method="POST" action="PHP/login.php">
				<h2>Log In</h2>
				<p id="message"></p>
				<input type="text" name="username" placeholder="Pseudo" required>
				<input type="password" name="password" placeholder="Password" required>
				<input type="submit" content="Submit">
			</form>
		</div>

		<header>
			<div id="dices">
                <div class="group">
                    <img id="4" class="des" src="img/d4.png">
                    <p id= "4" class="double"> x2 </p>
                </div>
				<div class="group">
                    <img id="6" class="des" src="img/d6.png">
                    <p id="6" class="double"> x2 </p>
                </div>
                <div class="group">
                    <img id="8" class="des" src="img/d8.png">
                    <p id="8" class="double"> x2 </p>
                </div>
                <div class="group">
                    <img id="12" class="des" src="img/d12.png">
                    <p id="12" class="double"> x2 </p>
                </div>
                <div class="group">
                    <img id="20" class="des" src="img/d20.png">
                    <p id="20" class="double"> x2 </p>
                </div>
			</div>
			<div id="buttons">
				<p class="register"> Register </p>
				<p class="register"> LogIn </p>
				<p class="logOut"> LogOut</p>
			</div>
		</header>

		<div id="board">
			<p id="result">Roll a dice !</p>
		</div>

		<div id="blackjack">
            <p id="BJ"> BlackJack </p>
			<p id="game"> Start a game </p>
            <p id="resultShow"></p>
            <div id="score">
                <p id="playerShow"></p>
                <p id="bankShow"></p>
            </div>
            <div id="bjButtons">
                <p id="draw"> Draw </p>
                <p id="stop"> Stop </p>
            </div>
		</div>

		

		<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
		<script src="JS_css/main.js"></script>
		<script src="JS_css/blackjack.js"></script>
		<script src="JS_css/decoreco.js"></script>
	</body>

</html>