$(document).ready(function () {
    //animated top nav
    $(window).scroll(function () {
        //Checking screen size and position from top
        if ($(this).scrollTop() > 150 && $(this).width() > 900) {
            $('#detail').slideUp();
        } else {
            $('#detail').slideDown();
        }
    });
    //smooth scroll for button
    $('#topbtn').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
    });
});

// When the user scrolls down 70px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("topbtn").style.display = "block";
    } else {
        document.getElementById("topbtn").style.display = "none";
    }
}
function myFunction() {
    document.getElementById("nav-toggleC").checked = false;
}