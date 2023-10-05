// JS code to close mobile menu with escape key //

// Select elements
const menu = document.querySelector('.menu');
const menuButtonContainer = document.querySelector('.menu-button-container');
const menuToggle = document.querySelector('#menu-toggle');
const navLinks = document.querySelectorAll('#nav a');
const menuItems = document.querySelectorAll('.menu > li');

// Add event listeners
menuToggle.addEventListener('click', toggleMenu);
document.addEventListener('keydown', closeMenu);

// Functions
function toggleMenu() {
  menu.classList.toggle('show-menu');
  menuButtonContainer.classList.toggle('close');
}

function closeMenu(event) {
  if (event.key === 'Escape' && menu.classList.contains('show-menu')) {
    menu.classList.remove('show-menu');
    menuButtonContainer.classList.remove('close');
  }
}

// Close menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('show-menu');
    menuButtonContainer.classList.remove('close');
  });
});

// Close menu when a menu item is clicked
menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menu.classList.remove('show-menu');
    menuButtonContainer.classList.remove('close');
  });
});

// This is for sticky header
    // <script>
    //     var prevScrollpos = window.pageYOffset;

    //     window.onscroll = function () {
    //         var currentScrollPos = window.pageYOffset;

    //         if (prevScrollpos > currentScrollPos) {
    //             document.getElementById("#nav").classList.remove("hide");
    //         } else {
    //             document.getElementById("#nav").classList.add("hide");
    //         }

    //         prevScrollpos = currentScrollPos;
    //     }
    const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});