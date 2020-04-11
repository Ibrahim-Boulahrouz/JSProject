(function () {
	"use strict";
    $(() => {
		let blackjackStatus = "close";
		$("#BJ").click(function () {
			if (blackjackStatus === "open") {
				blackjackStatus = "close";
				$("#blackjack").css("margin-left", "-20rem");
			} else {
				blackjackStatus = "open";
				$("#blackjack").css("margin-left", "0");
			}
		});

		function win() {
			$("#bjButtons").css("display", "none");
			$("#game").css("display", "block");
			$("#resultShow").css("display", "block");
		}

		let scorePlayer = 0;
		let scoreBank = 0;

		$("#game").click(function () {
			let object = $(this);
			$.ajax({
				url: 'PHP/initBlackjack.php',
				method: 'GET'
			}).done(function (data) {
				$("#score").css("display", "flex");
				$("#bjButtons").css("display", "flex");
				$("#game").css("display", "none");
				$("#resultShow").css("display", "none");
				scorePlayer = data.resultPlayer;
				scoreBank = data.resultBank;

				$("#playerShow").html("Score player: " + scorePlayer);
				$("#bankShow").html("Score Bank: " + scoreBank);

				console.log("Score Player =" + scorePlayer);
				console.log("Score Bank =" + scoreBank);

			}).fail(function () {
				console.log('Nope');
			});
		});
		$("#draw").click(function () {
			$.ajax({
				url: 'PHP/rollBlackjack.php',
				method: 'GET'
			}).done(function (drawData) {
				scorePlayer += drawData.result;
				$("#playerShow").html("Score player: " + scorePlayer);
				console.log("Score Player =" + scorePlayer)
				if (scorePlayer > 21) {
					$("#resultShow").html("Bank win !");
					win();
				}
				if (scorePlayer === 21) {
					$("#resultShow").html("Player win !");
					win();
				}
			})
		});
		$("#stop").click(function () {
			$.ajax({
				url: 'PHP/rollBank.php',
				method: 'GET',
				data: {
					actualBank: scoreBank
				}
			}).done(function (drawData) {
				scoreBank = drawData.result;
				$("#bankShow").html("Score Bank: " + scoreBank);
				console.log("Score Bank =" + scoreBank);
				if (scoreBank > 21) {
					$("#resultShow").html("Player win !");
					win();
				} else {
					if (scoreBank > scorePlayer) {
						$("#resultShow").html("Bank win !");
						win();
					}
					else if(scoreBank == scorePlayer) {
						$("#resultShow").html("Draw !");
						win();
					}
					else {
						$("#resultShow").html("Player win !");
						win();
					}
				}
			})
		})
	})
})();