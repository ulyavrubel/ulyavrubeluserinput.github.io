var apple = document.getElementById('apple');
// var applePic = document.getElementById('apple-pic');
var grape = document.getElementById('grape');
// var grapePic = document.getElementById('grape-pic');
var orange = document.getElementById('orange');
// var orangePic = document.getElementById('orange-pic');

// apple.addEventListener('click', function() {
//     if (applePic.className === "hide") {
//         applePic.className = "";
//     } else {
//         applePic.className = "hide";
//     }
// });

// grape.addEventListener('click', function() {
//     if (grapePic.className === "hide") {
//         grapePic.className = "";
//     } else {
//         grapePic.className = "hide";
//     }
// });

// orange.addEventListener('click', function() {
//     if (orangePic.className === "hide") {
//         orangePic.className = "";
//     } else {
//         orangePic.className = "hide";
//     }
// });

apple.addEventListener('click', picLink);
grape.addEventListener('click', picLink);
orange.addEventListener('click', picLink);

function picLink() {
    var allImages = document.querySelectorAll('img');

    for (var i = 0; i < allImages.length; i++) { 
        allImages[i].className = "hide";
    }

    var picId = this.attributes["data-img"].value;
    var pic = document.getElementById(picId);
    if (pic.className === "hide") {
        pic.className = "";
    } else {
        pic.className = "hide";
    }
}