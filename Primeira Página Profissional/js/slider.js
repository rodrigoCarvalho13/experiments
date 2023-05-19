
$(function(){
    var elementoAtual = 0;
    var numeroDeElementos = $(".slider-images img").length;
        console.log("o número máximo de elementos é: " +numeroDeElementos);
    var delay = 2000;

    cliqueSlider();
    initSlider();

    function initSlider(){
        $(".slider-images").each(function(i){
            if(i==0){
                $(this).fadeIn();
            }
        })

            $(".slider-images").eq(0).fadeIn();
            setInterval(function(){
                alternarSlider();
            },delay);


    }

    function alternarSlider(){
        $(".slider-images img").eq(elementoAtual).stop().fadeout(2000);
        elementoAtual+=1;
            if(elementoAtual == numeroDeElementos)
                elementoAtual = 0;
                $(".dots i").css("background-color","lightyellow");
                $(".dots i").eq(elementoAtual).css("background-color","lightyellow");
                $(".slider-images img").eq(elementoAtual).stop().fadeIn(2000);
    }

    function cliqueSlider(){
        $(".dots i").click(function(){
            $(".slider-images img").eq(elementoAtual).stop().fadeOut(2000);
            elementoAtual = $(this).index();
            $(".slider-images img").eq(elementoAtual).stop().fadeIn(2000);
            $(".dots i").css("background-color","white");
            $(this).css("background-color","yellow");
        });
    }
})