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
                console.error('Error.');
            });
            return false;
        });

		$(".register").click(function() {
            if(signStatus === "open") {
                signStatus = "close";
                $("#decoreco").css("margin-top", "-22.6rem");
            }
            else {
                signStatus = "open";
                $(".message").text('');
                $("#decoreco").css("margin-top", "0");
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
                $('.logOut').css('display', 'block');
            } else {
                $('.register').css('display', 'block');
                $('.logOut').css('display', 'none');
            }
        }).fail(function () {
            console.log('Connexion impossible !');
        });

	})
})();