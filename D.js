$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
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