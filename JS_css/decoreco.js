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
                   // window.location.href = 'index.php';
				   console.log(data);
                } else {
                    $('.message').text(data.message);
                }
            }).fail(function () {
                console.error('Une erreur critique est arrivée.');
            });
            
        });

	})
})();