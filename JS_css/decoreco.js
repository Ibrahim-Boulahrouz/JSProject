(function () {
	"use strict";
    $(() => {
		$("#register").click(function() {	
		})
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
                logSignStatus = "open";
                $(".message").text('');
                $("#decoreco").css("height", "auto");
            }
        });

	})
})();