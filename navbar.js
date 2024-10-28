// Functionality to toggle sidebar and overlay
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    sidebar.classList.toggle('left-0');
    sidebar.classList.toggle('-left-[100%]');

    if (sidebar.classList.contains('left-0')) {
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        overlay.classList.add('opacity-50', 'pointer-events-auto');
    } else {
        overlay.classList.add('opacity-0', 'pointer-events-none');
        overlay.classList.remove('opacity-50', 'pointer-events-auto');
    }
}

document.getElementById('overlay').addEventListener('click', function() {
    toggleSidebar();
});

// Scroll functionality to hide/show header on scroll
let lastScrollTop = 0; 
const header = document.querySelector('header'); 

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > header.offsetHeight) {
        // Scroll down
        header.classList.add('header-hidden'); // Hide the header
    } else if (currentScroll < lastScrollTop && (lastScrollTop - currentScroll) > 5) {
        // Scroll up
        header.classList.remove('header-hidden'); // Show the header
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});
