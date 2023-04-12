$(function(){
    $("body").prepend("<div class='top'></div>");
    $(".top").css("width","100%").css("height","50%").css("background-image","url(imagens/background.jpg)")
        .css("background-repeat","no-repeat").css("background-size","cover")
        .css("background-position","top");

    $(".top").prepend("<sdiv class='title'></div>");   
        $(".title").css("margin-left","40%").css("font-family", "'Roboto', sans-serif")
        .css("margin-top","2%").css("float","left").css("background-color","black")
        .css("opacity","0.8").css("border","7px double white").css("padding-left","2px")
        .css("padding-right","5px"); 

    $(".title").append("<h1>CodeBook</h1>");
        $(".title h1").css("color","white").css("font-size","65px").css("opacity","1");


    $(".top").append("<div class='circle'></div>");
    $(".circle").css("max-width","100%").css("max-height","100%")
        .css("width","200px").css("height","200px").css("border-radius","100px")
        .css("background-color","#6d53c2").css("border","3px solid white")
        .css("position","relative").css("left","43%").css("top","80%")
        .css("z-index","99");

    $(".circle").append("<p>Click to LogIn</p>");
    $(".circle p").css("text-align","center").css("text-transform","uppercase")
        .css("color","white").css("text-shadow","1px 1px 2px grey").css("cursor","pointer")
        .css("position","relative").css("bottom","23%").css("font-size","22px").css("font-family", "'Roboto', sans-serif");

    
    $(".circle").append("<div class='login'></div>");
        $(".circle .login").css("display","none").css("padding-left","5%")
        .css("padding-right","5%").css("padding-top","30%");

    $(".circle .login").append("<h1>Log In with your email and password:</h1>")
        $(".login h1").css("text-transform","uppercase").css("font-weight","lighter")
        .css("color","white").css("font-size","22px").css("text-align","center")
        .css("text-shadow","1px 1px 2px grey").css("font-family", "'Roboto', sans-serif");

    $(".circle .login").append("<input type='text' id='loginEmail' placeholder='Email'></input>");
        $("#loginEmail").css("display","block").css("height","35px").css("width","75%")
        .css("margin-top","5%").css("margin-left","12%").css("padding-left","31%");

    $(".circle .login").append("<input type='text' id='loginPassword' placeholder='Password'></input>");
        $("#loginPassword").css("display","block").css("height","35px").css("width","75%")
        .css("margin-top","8%").css("margin-left","12%").css("padding-left","28%");

    $(".circle .login").append("<input type='submit' id='loginSubmit' placeholder='Send'></input>");
    $("#loginSubmit").css("display","block").css("height","35px").css("width","75%")
        .css("margin-top","8%").css("margin-left","12%").css("background-color","#9ADBC5")
        .css("border","2px solid white").css("color","white").css("cursor","pointer");


        $(".circle").hover(function(){
            $(this).css("background-color","#3d53c2");
            },function(){
                $(this).css("background-color","#6d53c2");
            });

        $("input[type=submit]").hover(function(){
            $(this).css("background-color","#DFDD6C");
            },function(){
                $(this).css("background-color","#9ADBC5");
            });

    
    $("body").append("<div class='bottom'></div>");
        $(".bottom").css("width","100%").css("height","50%")
        .css("background-image","url(imagens/bg.jpg)").css("background-repeat","no-repeat")
        .css("background-size","cover").css("background-position","left").css("opacity","0.6");

        
    $(".bottom").append("<div class='footer'></div>");
            $(".footer").css("width","100%").css("height","100%").css("z-index","1").css("display","flex")
            .css("vertical-align","bottom").css("flex-direction","row").css("justify-content","center")
            .css("justify-content","space-between").css("padding-left","35%").css("padding-right","35%")
            .css("padding-bottom","1%").css("align-items","flex-end");

    $(".footer").append("<p>English</p><p>Spanish</p><p>Portuguese</p><p>German</p><p>Italian</p>")
            $(".footer p").css("color","white");
})


$(function(){
    $(".circle").click(function(){
        $(".circle").animate({
            width: "400px",
            height: "600px",
            top: 225,
            left: 725
        });

        $(".circle p").fadeOut()
        $(".circle .login").fadeIn(2000)
    });
});

$(function(){
    languageSelection();

    function languageSelection(){
        var elemento = $(".footer p");
        elemento.click(function(){
            $(this).css("color","black").css("font-weight","bold").css("text-decoration","underline");
            return false;
        });
    }
})