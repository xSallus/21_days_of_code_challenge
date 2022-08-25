//import { loadFull } from 'tsparticles'
import { loadStarsPreset } from 'tsparticles-preset-stars'

export const options = {
    background: {
        color: {
            value: 'transparent',
        },
    },
    fpsLimit: 60,
    preset: 'stars',
    interactivity: {
        mode: 'bubble',
    },
    number: {
        density: {
            enable: false,
        },
        value: 100,
    },
    /*particles: {
    color: {
      //value: '#03c006'
      value:  ['#FF5A86', '#953AFE', '#FFC326', '#46C0FF', '#ddd', '#03c006'],
    },
    collisions: {
      enable: true,
    },
    move: {
      //enable: false,
      direction: 'random',
			enable: true,
			straight: false,
			outMode: 'bounce',
			random: false,
			speed: 1,
			gravity: {
				enable: true,
				acceleration: 20
			}
    },
    number: {
      density: {
        enable: false,
        //area: 800
      },
      value: 100,
    },
    opacity: {
      value: 0.68,
			animation: {
				enable: true,
				minimumValue: 0,
				speed: 0.5,
				startValue: 'max',
				destroy: 'min'
			}
    },
    shape: {
      type: 'circle',
    },
    size: {
      random: false,
      value: 2,
    },
	},
	detectRetina: true*/
}

export const particlesInit = async (engine: any) => {
    console.log(engine)
    await loadStarsPreset(engine)
}

export const particlesLoaded = async (container: any) => {
    console.log('Particles container loaded', container)
}
