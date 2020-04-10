(function () {
	"use strict";
    $(() => {
		$(".des").click(function() {
			let object = $(this);
			$.ajax({
				url: 'PHP/getDice.php',
				method: 'GET',
				data: {
					"diceId" : $(this).attr("id")
				}
			}).done(function (data) {
				$("#result").text("You rolled a	: " + data.result);
			}).fail(function () {
				console.log('Nope');
			});
		})

		$(".double").click(function() {
			let object = $(this);
			$.ajax({
				url: 'PHP/getDice.php',
				method: 'GET',
				data: {
					"diceId" : $(this).attr("id")
				}
			}).done(function (data1) {
				$.ajax({
					url: 'PHP/getDice.php',
					method: 'GET',
					data: {
						"diceId" : object.attr("id")
					}
				}).done(function (data2) {
					$("#result").text("You rolled a	: " + data1.result + " + " + data2.result + " = " + (data1.result+data2.result));
				}).fail(function () {
					console.log('Nope!');
				});
			}).fail(function () {
				console.log('Refus!');
			});

		})


	})
})();