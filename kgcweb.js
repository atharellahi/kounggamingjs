
const player = document.querySelector('.youtube-player')
const ytItems = document.querySelectorAll('.thumb');
for (ytItem of ytItems) {
    ytItem.addEventListener('click', (e) => {
        const videoSource = e.target.getAttribute('mysrc')
        player.innerHTML = `<iframe src=${videoSource} title="YouTube video player"
allowfullscreen></iframe>`
    })
}

const mnubtn = document.querySelector('#menubtn');
const navdrop = document.querySelector('#dropdown');
mnubtn.addEventListener('click', () => {
    if (navdrop.classList.value === 'hidden') {
        navdrop.classList.remove('hidden');
    }
    else {
        navdrop.classList.add('hidden');
    }
})