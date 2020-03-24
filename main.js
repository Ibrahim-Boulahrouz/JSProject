(function () {
	"use strict";
    $(() => {
		$(".des").click(function() {
			let object = $(this);
			$.ajax({
				url: 'getDice.php',
				method: 'GET',
				data: {
					"diceId" : $(this).attr("id")
				}
			}).done(function (data) {
				for(let i = 10; i > 0; --i){
					task(i);
				}
				function task(i){
					setTimeout(function(){
						let anime = Math.floor(Math.random() * (object.attr("id")-1)) + 1;
						$("#result").delay(1000).text("You rolled a	: " + anime);
						console.log(anime)
					},100* i);
				}
				$("#result").text("You rolled a	: " + data.result);
			}).fail(function () {
				console.log('Connexion impossible !');
			});
		})


	})
})();