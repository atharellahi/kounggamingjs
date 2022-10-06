
const player = document.querySelector('.youtube-player')
const ytItems = document.querySelectorAll('.thumb');
for (ytItem of ytItems) {
ytItem.addEventListener('click',(e) => {
    const videoSource = e.target.getAttribute('mysrc')
    player.innerHTML = `<iframe src=${videoSource} title="YouTube video player"
allowfullscreen></iframe>`
})
}