import 'https://vjs.zencdn.net/7.15.4/video.min.js'

ps5.classList.remove('hidden')

const player = videojs('ps5', {
    controls: true,
    preload: 'auto',
})

export {
    player
}
