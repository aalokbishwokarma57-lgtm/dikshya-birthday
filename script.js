// ===========================
// LOADER
// ===========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 2500);


});




// ===========================
// OPEN SURPRISE BUTTON
// ===========================


const openBtn = document.getElementById("openBtn");


if(openBtn){

openBtn.addEventListener("click",()=>{


    document.querySelector(".letter-section")
    .scrollIntoView({

        behavior:"smooth"

    });


});

}





// ===========================
// TYPING LOVE LETTER
// ===========================


const text = `

My love ❤️

Happy Birthday to the most beautiful women in my life.

Thank you for every smiland sometimes sadd moood,and
every laugh,
and every beautiful memory we have created together.

You make my normal days special.

You are my happiness,
my peace,
and my favorite person.

I hope your birthday is filled with love,
joy, and everything your heart wishes for.

I love you dheraii Ghantiii ❤️


`;


let index = 0;


const typingText =
document.getElementById("typingText");



function typeWriter(){


    if(typingText && index < text.length){


        typingText.innerHTML += text.charAt(index);

        index++;


        setTimeout(typeWriter,40);


    }


}



window.addEventListener("scroll",()=>{


    const letter =
    document.querySelector(".letter-card");


    if(letter){


        let position =
        letter.getBoundingClientRect()
        .top;


        if(position < window.innerHeight-100
        && index===0){

            typeWriter();

        }


    }


});





// ===========================
// SCROLL REVEAL ANIMATION
// ===========================


const sections =
document.querySelectorAll("section");



window.addEventListener("scroll",()=>{


    sections.forEach(section=>{


        let top =
        section.getBoundingClientRect()
        .top;


        if(top <
        window.innerHeight-100){


            section.style.opacity="1";

            section.style.transform=
            "translateY(0)";


        }


    });


});



sections.forEach(section=>{


    section.style.opacity="0";

    section.style.transform=
    "translateY(50px)";

    section.style.transition=
    "1s ease";


});





// ===========================
// CREATE HEART PARTICLES
// ===========================


function createHeart(){


    const heart =
    document.createElement("div");


    heart.innerHTML="❤️";


    heart.style.position="fixed";

    heart.style.bottom="-20px";

    heart.style.left=
    Math.random()*100+"vw";


    heart.style.fontSize=
    Math.random()*25+15+"px";


    heart.style.animation=
    "heartFloat 8s linear";


    heart.style.zIndex="10";


    document.body.appendChild(heart);



    setTimeout(()=>{


        heart.remove();


    },8000);



}



setInterval(createHeart,800);
/* ===========================
   CANDLE BLOW ANIMATION
=========================== */


const blowButton =
document.getElementById("blowCandle");


const flame =
document.querySelector(".flame");



if(blowButton && flame){


blowButton.addEventListener("click",()=>{


    flame.style.animation="none";


    flame.style.opacity="0";


    blowButton.innerHTML =
    "✨ Wish Made ❤️";



    createConfetti();



});

}




// ===========================
// GIFT OPENING
// ===========================


const giftButton =
document.getElementById("giftButton");


const hiddenMessage =
document.getElementById("hiddenMessage");



if(giftButton){


giftButton.addEventListener("click",()=>{


    if(hiddenMessage.style.display==="block"){


        hiddenMessage.style.display="none";


        giftButton.innerHTML=
        "Open Gift ✨";


    }

    else{


        hiddenMessage.style.display="block";


        giftButton.innerHTML=
        "❤️ Love Revealed ❤️";


        createConfetti();


    }


});


}






// ===========================
// CONFETTI SYSTEM
// ===========================


function createConfetti(){


    for(let i=0;i<150;i++){


        let confetti =
        document.createElement("div");



        confetti.className="confetti";



        confetti.style.left =
        Math.random()*100+"vw";



        confetti.style.backgroundColor =
        randomColor();



        confetti.style.animationDuration =
        (Math.random()*3+2)+"s";



        confetti.style.transform =
        `rotate(${Math.random()*360}deg)`;



        document.body.appendChild(confetti);



        setTimeout(()=>{


            confetti.remove();


        },5000);



    }


}





function randomColor(){


    const colors=[

        "#d4af37",

        "#ff4f91",

        "#ffffff",

        "#ff0000",

        "#00ffff",

        "#7fff00"

    ];


    return colors[
        Math.floor(Math.random()*colors.length)
    ];


}





// ===========================
// ADD CONFETTI STYLE
// ===========================


const confettiStyle =
document.createElement("style");


confettiStyle.innerHTML=`


.confetti{

position:fixed;

top:-20px;

width:12px;

height:20px;

z-index:999;

animation:fall linear forwards;

}



@keyframes fall{


0%{

transform:
translateY(0)
rotate(0deg);

opacity:1;

}


100%{

transform:
translateY(110vh)
rotate(720deg);

opacity:0;

}


}



`;


document.head.appendChild(confettiStyle);







// ===========================
// FIREWORKS ACTIVATION
// ===========================


function startFireworks(){


    const area =
    document.querySelector(".fireworks-section");



    if(!area) return;



    for(let i=0;i<20;i++){


        let spark =
        document.createElement("div");



        spark.className="spark";



        spark.style.left =
        Math.random()*100+"%";



        spark.style.top =
        Math.random()*80+"%";



        area.appendChild(spark);



        setTimeout(()=>{


            spark.remove();


        },3000);



    }


}




setInterval(()=>{


    startFireworks();


},4000);





// ===========================
// SPARK STYLE
// ===========================


const sparkStyle =
document.createElement("style");


sparkStyle.innerHTML=`


.spark{

position:absolute;

width:8px;

height:8px;

background:#d4af37;

border-radius:50%;

box-shadow:

0 0 20px #d4af37;


animation:sparkExplosion 2s ease-out;


}



@keyframes sparkExplosion{


0%{

transform:
scale(1);

opacity:1;

}


100%{


transform:

scale(15);

opacity:0;


}


}


`;


document.head.appendChild(sparkStyle);
/* ===========================
   MUSIC PLAYER
=========================== */


const music =
document.getElementById("birthdayMusic");


const musicBtn =
document.getElementById("musicBtn");



let playing = false;



if(musicBtn){


musicBtn.addEventListener("click",()=>{


    if(!playing){


        music.play();


        musicBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';


        playing=true;


    }

    else{


        music.pause();


        musicBtn.innerHTML =
        '<i class="fa-solid fa-music"></i>';


        playing=false;


    }


});


}





// ===========================
// AUTO MUSIC AFTER BUTTON CLICK
// ===========================


const openButton =
document.getElementById("openBtn");



if(openButton){


openButton.addEventListener("click",()=>{


    if(music){


        music.volume=0.5;


        music.play()
        .catch(()=>{});


        playing=true;


        if(musicBtn){

            musicBtn.innerHTML =
            '<i class="fa-solid fa-pause"></i>';

        }


    }


});


}







// ===========================
// CURSOR GOLDEN GLOW
// ===========================


const cursorGlow =
document.createElement("div");



cursorGlow.className =
"cursorGlow";


document.body.appendChild(cursorGlow);




document.addEventListener("mousemove",(e)=>{


    cursorGlow.style.left =
    e.clientX+"px";


    cursorGlow.style.top =
    e.clientY+"px";


});





const cursorStyle =
document.createElement("style");



cursorStyle.innerHTML=`


.cursorGlow{

position:fixed;

width:25px;

height:25px;

border-radius:50%;

background:

rgba(212,175,55,.6);


pointer-events:none;

transform:
translate(-50%,-50%);


filter:
blur(10px);


z-index:9999;

}



`;



document.head.appendChild(cursorStyle);







// ===========================
// RANDOM SPARKLES
// ===========================



function createSparkle(){


    const sparkle =
    document.createElement("div");



    sparkle.innerHTML="✨";


    sparkle.style.position="fixed";


    sparkle.style.left =
    Math.random()*100+"vw";


    sparkle.style.top =
    Math.random()*100+"vh";


    sparkle.style.fontSize =
    Math.random()*20+10+"px";


    sparkle.style.zIndex="5";


    sparkle.style.animation=
    "sparkleFade 3s linear";



    document.body.appendChild(sparkle);



    setTimeout(()=>{


        sparkle.remove();


    },3000);



}



setInterval(createSparkle,500);






const sparkleCSS =
document.createElement("style");



sparkleCSS.innerHTML=`


@keyframes sparkleFade{


0%{

opacity:0;

transform:
scale(0);

}


50%{

opacity:1;

}


100%{

opacity:0;

transform:
scale(2);

}


}



`;



document.head.appendChild(sparkleCSS);






// ===========================
// SMOOTH NAVIGATION
// ===========================


document.querySelectorAll("nav a")
.forEach(link=>{


    link.addEventListener("click",(e)=>{


        e.preventDefault();


        const target =
        document.querySelector(
        link.getAttribute("href")
        );



        if(target){


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});







// ===========================
// FINAL MESSAGE EFFECT
// ===========================


const finalCard =
document.querySelector(".final-card");



if(finalCard){


setTimeout(()=>{


    finalCard.style.transform =
    "scale(1)";


},3000);


}





console.log(
"❤️ Birthday Surprise Website Loaded Successfully ❤️"
);
