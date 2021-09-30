window.video.addEventListener('click', function () {
    this.classList.add('hidden')

    import('./player.js').then(({ player }) => {
        console.log('playeerrrr in apppp')
        setTimeout(() => {
            player.play()
        }, 100)
    })
})
