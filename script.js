document.addEventListener("DOMContentLoaded", function(event) { 
    var b = document.getElementById("bodyblur");
    var d = document.getElementById("Content");
    var f = document.getElementById("fotoakhir");
    var e = document.getElementById("beneranblur");
    var a = document.getElementById("kolombaru");
    var h = document.getElementById("kolombaru").getElementsByTagName("li");
    var g = document.getElementById("Tombol");
    var c = document.getElementById("suratin").getElementsByTagName("img");
    var i = document.getElementById("Content").getElementsByTagName("div");

    function hideBodyBlur() {
        b.style.opacity = "0";
        setTimeout(function() {b.style.display = "none";}, 1E3);
    }

    setTimeout(function() {
        b.style.opacity = ".6";
    }, 100);

    setTimeout(function() {
        d.style.opacity = "1";
    }, 2E3);

    setTimeout(function() {
        f.style.opacity = "1";
    }, 2900);

    setTimeout(function() {
        e.style.opacity = "0";
    }, 3E3);

    setTimeout(function() {
        i[0].style.animationName = "jj";
        i[0].style.animationDuration = "3s";
        i[0].style.animationIterationCount = "infinite";
        i[0].style.animationTimingFunction = "ease-in-out";
    }, 4E3);

    setTimeout(function() {
        for (var j = 0; j < h.length; j++) {
            h[j].style.transform = "scale(1)";
            h[j].style.opacity = "1";
        }
    }, 4200);

    setTimeout(function() {
        for (j = 0; j < c.length; j++) {
            c[j].style.display = "flex";
        }
    }, 5E3);

    setTimeout(function() {
        for (j = 0; j < c.length; j++) {
            c[j].style.transition = "all .5s ease";
        }
    }, 5E3);

    setTimeout(function() {
        for (j = 0; j < c.length; j++) {
            c[j].style.transform = "scale(1)";
        }
    }, 5E3);

    setTimeout(function() {
        g.style.opacity = "1";
    }, 5800);

    setTimeout(function() {
        a.style.opacity = "1";
    }, 5800);

    setTimeout(function() {
        a.style.transform = "scale(1)";
    }, 5800);

    setTimeout(function() {
        a.style.transition = "all .6s ease";
    }, 5800);

    setTimeout(function() {
        for (j = 0; j < i.length; j++) {
            i[j].style.animationName = "kont";
            i[j].style.animationDuration = "1.5s";
            i[j].style.animationIterationCount = "infinite";
            i[j].style.animationTimingFunction = "linear";
        }
    }, 6E3);

    setTimeout(function() {
        hideBodyBlur();
    }, 7E3);
});
