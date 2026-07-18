function bukaKad() {

    //document.getElementById("cover").style.display = "none";
    //document.getElementById("kad").style.display = "block";
    ////document.getElementById("lagu").play();
    //// stop background

    //let bg = document.getElementById("backgroundMusic");

    //bg.pause();

    //bg.currentTime = 0;



    //// start lagu kahwin

    //let lagu = document.getElementById("lagu");

    //lagu.volume = 0.35;

    //lagu.play();

    //document.body.classList.remove("lock");
    let cover = document.getElementById("cover");

    let kad = document.getElementById("kad");


    // stop cover animation

    cover.classList.add("keluar");



    setTimeout(function () {


        //cover.style.display = "none";
        cover.remove();


        kad.style.display = "block";


        kad.classList.add("masuk");

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });




    }, 1200);



    let bg = document.getElementById("backgroundMusic");

    if (bg) {

        bg.pause();

        bg.currentTime = 0;

    }



    //let lagu = document.getElementById("lagu");

    //if (lagu) {

    //    lagu.volume = 0.35;

    //    lagu.play();

    //}
    let lagu = document.getElementById("lagu");

    if (lagu) {

        lagu.volume = 0.35;

        lagu.play().catch(function (error) {

            console.log("Audio tunggu klik user");

        });

    }



    document.body.classList.remove("lock");


    var tarikhKahwin = new Date("2026-08-31T11:00:00").getTime();

    setInterval(function () {


        var sekarang = new Date().getTime();


        var beza = tarikhKahwin - sekarang;



        var hari = Math.floor(beza / (1000 * 60 * 60 * 24));


        var jam = Math.floor(
            (beza % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );


        var minit = Math.floor(
            (beza % (1000 * 60 * 60))
            / (1000 * 60)
        );


        var saat = Math.floor(
            (beza % (1000 * 60))
            / 1000
        );



        document.getElementById("hari").innerHTML = hari;

        document.getElementById("jam").innerHTML = jam;

        document.getElementById("minit").innerHTML = minit;

        document.getElementById("saat").innerHTML = saat;



    }, 1000);

    let slideIndex = 0;


    let slides = document.querySelectorAll(".slide");


    setInterval(function () {


        slides[slideIndex].classList.remove("active");


        slideIndex++;


        if (slideIndex >= slides.length) {

            slideIndex = 0;

        }


        slides[slideIndex].classList.add("active");


    }, 4000);

    //function bunga() {

    //    let flower = document.createElement("div");


    //    flower.innerHTML = "🌹";


    //    flower.className = "flower";


    //    document.body.appendChild(flower);



    //    flower.style.left =
    //        Math.random() * 100 + "vw";


    //    flower.style.animationDuration =
    //        (Math.random() * 3 + 3) + "s";



    //    setTimeout(() => {

    //        flower.remove();

    //    }, 6000);


    //} setInterval(bunga, 500);

    //function bunga() {

    //    let flower = document.createElement("img");


    //    flower.src = "images/flower.png";


    //    flower.className = "flower";


    //    document.body.appendChild(flower);



    //    flower.style.left =
    //        Math.random() * 100 + "vw";


    //    flower.style.animationDuration =
    //        (Math.random() * 3 + 3) + "s";



    //    setTimeout(() => {

    //        flower.remove();

    //    }, 6000);


    //}


    //setInterval(bunga, 800);
    function bunga() {

        let flower = document.createElement("img");


        flower.src = "images/flower.png";


        // random size

        if (Math.random() > 0.5) {

            flower.className = "flower besar";

        }
        else {

            flower.className = "flower kecil";

        }



        document.body.appendChild(flower);



        flower.style.left =
            Math.random() * 100 + "vw";


        flower.style.animationDuration =
            (Math.random() * 5 + 5) + "s";



        setTimeout(() => {

            flower.remove();

        }, 6000);


    }


    setInterval(bunga, 1200);



   
}
window.onload = function () {

    let music = document.getElementById("backgroundMusic");

    music.volume = 0.2;


    function mulaMusic(){

        music.play();

        document.removeEventListener("click", mulaMusic);
        document.removeEventListener("touchstart", mulaMusic);

    }


    document.addEventListener("click", mulaMusic);

    document.addEventListener("touchstart", mulaMusic);


}
//function playMusic() {

//    let music = document.getElementById("backgroundMusic");

//    music.play();

//}
window.addEventListener("scroll", function () {


    let elements = document.querySelectorAll(".reveal");


    elements.forEach(function (el) {


        let position = el.getBoundingClientRect().top;


        let screen = window.innerHeight;



        if (position < screen - 100) {


            el.classList.add("active");


        }


    });


});
