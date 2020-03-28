(function () {
	"use strict";
    $(() => {
		let signStatus = "close";
		$('.form').submit(function () {
            $.ajax({
                url : $(this).attr('action'),
                method : $(this).attr('method'),
                data : $(this).serialize()
            }).done(function (data) {
                if(data.success === true) {
                    window.location.href = 'index.php';
                } else {
                    $('.message').text(data.message);
                }
            }).fail(function () {
                console.error('Une erreur est arrivee.');
            });
            return false;
        });

		$(".register").click(function() {
            if(signStatus === "open") {
                signStatus = "close";
                $("#decoreco").css("height", "0");
            }
            else {
                signStatus = "open";
                $(".message").text('');
                $("#decoreco").css("height", "auto");
            }	
        });
		$(".logOut").click(function() {
            $.ajax({
                url: 'PHP/logout.php',
            }).done(function (data) {
                window.location.href = './';
                console.log('Deconnexion')
            }).fail(function () {
                console.log('Deconnexion impossible !');
            });
        });

		$.ajax({
            url: 'PHP/isConnected.php',
            method: 'GET'
        }).done(function (data) {
            if (data) {
                $('.register').css('display', 'none');
                $('.logOut').css('display', 'flex');
            } else {
                $('.register').css('display', 'flex');
                $('.logOut').css('display', 'none');
            }
        }).fail(function () {
            console.log('Connexion impossible !');
        });

	})
})();