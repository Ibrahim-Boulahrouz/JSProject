(function () {
	"use strict";
    $(() => {
		$(".des").click(function() {
			let object = $(this);
			$.ajax({
				url: '../PHP/getDice.php',
				method: 'GET',
				data: {
					"diceId" : $(this).attr("id")
				}
			}).done(function (data) {
				$("#result").text("You rolled a	: " + data.result);
			}).fail(function () {
				console.log('Connexion impossible !');
			});
		})

		$(".double").click(function() {
			let object = $(this);
			$.ajax({
				url: '../PHP/getDice.php',
				method: 'GET',
				data: {
					"diceId" : $(this).attr("id")
				}
			}).done(function (data1) {
				$.ajax({
					url: '../PHP/getDice.php',
					method: 'GET',
					data: {
						"diceId" : object.attr("id")
					}
				}).done(function (data2) {
					$("#result").text("You rolled a	: " + data1.result + " + " + data2.result + " = " + (data1.result+data2.result));
					console.log(typeof data1.result);
					console.log(data2);
				}).fail(function () {
					console.log('Connexion impossible !');
				});
			}).fail(function () {
				console.log('Connexion impossible !');
			});

		})


	})
})();