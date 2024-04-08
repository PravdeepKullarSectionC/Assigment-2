document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle');
    const sideMenu = document.querySelector('.side-menu');

    toggle.addEventListener('click', function () {
        sideMenu.classList.toggle('open');
    });
});

window.addEventListener('resize', function () {
    const sideMenu = document.querySelector('.side-menu');
    if (window.innerWidth > 768) {
        sideMenu.classList.remove('open');
    }
});

document.getElementById('learn-more-btn').addEventListener('click', function () {
    document.getElementById('progress-bar').style.display = 'block';
    document.getElementById('progress').style.width = '0%';
    document.getElementById('wait-text').style.display = 'block'; // Show "Please wait..." text

    var progressBar = document.getElementById('progress');
    var width = 0;
    var id = setInterval(frame, 35);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
            document.getElementById('progress-bar').style.display = 'none';
            // Hide "Please wait..." text when done
            document.getElementById('wait-text').style.display = 'none';

            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', '_blank');
        } else {
            width += 1; // Increment width more slowly
            progressBar.style.width = width + '%';
        }
    }
});
