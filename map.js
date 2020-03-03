(function() {

    class Damier {

        constructor(size) {
            this.size = size;
            this.cursorColor = "blue";
        }

        switchCursor() {
            this.cursorColor = (this.cursorColor == "blue" ? "red" : "blue");
        }

        getCursorColor() {
            return this.cursorColor;
        }

        initDamier() {
            for(let i = 0; i < this.size; i++) {
                $("#damier").append('<div class="line line'+ i +'"></div>');
                for(let j = 0; j < this.size; j++){
                    $(".line"+ i).append('<div class="column column'+ j +' case"></div>');
                }
            }
            for (let i = 0; i < this.size; i++){
                if (i % 2 == 0){
                    for (let j= 0; j<this.size; j++) {
                        if(j % 2 == 0){
                            $(".line" + i + " .column" + j ).data('x', i).data('y', j).css("background-color", "black");
                        }
                        else{
                            $(".line" + i + " .column" + j ).data('x', i).data('y', j).css("background-color", "white");
                        }
                    }
                }
                else{
                    for (let j= 0; j<this.size; j++) {
                        if(j % 2 == 0){
                            $(".line" + i + " .column" + j ).data('x', i).data('y', j).css("background-color", "white");
                        }
                        else{
                            $(".line" + i + " .column" + j ).data('x', i).data('y', j).css("background-color", "black");
                        }
                    }
                }
            }

            $(".case").mouseover(function() {
                $(this).css("background-color", "blue");
            });

            $(".case").mouseout(function() {
                if($(this).data('owner') == null) {
                    $(this).css("transition-duration", "0.5s");
                    if ( $(this).data('x') % 2 == 0){
                        if($(this).data('y') % 2 == 0){
                            $(".line" + $(this).data('x') + " .column" + $(this).data('y') ).css("background-color", "black");
                        }
                        else{
                            $(".line" + $(this).data('x') + " .column" + $(this).data('y') ).css("background-color", "white");
                        }
                    }
                    else{
                        if($(this).data('y') % 2 == 0){
                            $(".line" + $(this).data('x') + " .column" + $(this).data('y') ).css("background-color", "white");
                        }
                        else{
                            $(".line" + $(this).data('x') + " .column" + $(this).data('y') ).css("background-color", "black");
                        }
                    }
                }

            });
        }
    }

    class Morpion {
        constructor() {
            this.player1 = 0;
            this.player2 = 0;
            this.turn = 1;

            let damier = new Damier(3);
            damier.initDamier();

        }

        switchTurn() {
            this.turn = this.turn == "player1" ? "player2" : "player1";
        }

    }

    $(document).ready(() => {

        new Morpion();

    });
}) ();