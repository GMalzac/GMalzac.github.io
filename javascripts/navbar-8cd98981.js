function initUpdateNavbarOnScroll(){var n=document.querySelector(".navbar-wagon");console.log(n.classList),window.addEventListener("scroll",function(){window.scrollY>=window.innerHeight?n.classList.add("navbar-wagon-white"):n.classList.remove("navbar-wagon-white")})}function initUpdateNavbarLinkOnScroll(){var n=document.querySelectorAll(".navbar-wagon-link");window.addEventListener("scroll",function(){window.scrollY>=window.innerHeight?n.forEach(function(n){n.classList.add("navbar-wagon-white-link")}):n.forEach(function(n){n.classList.remove("navbar-wagon-white-link")})})}