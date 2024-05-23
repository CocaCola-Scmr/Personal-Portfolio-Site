window.onscroll = function() {scrollFunction()};

const links = document.getElementsByTagName("a");

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("topnav").style.backgroundColor = "#9254DE";
        document.getElementById("topnav").style.boxShadow = "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px";
        for (var link of links) {
            link.style.color = "white";
        }
    } else {
        document.getElementById("topnav").style.backgroundColor = "transparent";
        document.getElementById("topnav").style.boxShadow = "none";
        for (var link of links) {
            link.style.color = "#121212";
        }
    }
}