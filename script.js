const header = document.querySelector("header");



let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

document.addEventListener("DOMContentLoaded", function () {
    var headerContainer = document.getElementById("header");
    var footerContainer = document.getElementById("footer");
  
    function loadFile(url, container) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          container.innerHTML = xhr.responseText;
        }
      };
      xhr.send();
    }
  
    loadFile("layout/header.html", headerContainer);
    loadFile("layout/footer.html", footerContainer);
  });
  

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('open');
// };
