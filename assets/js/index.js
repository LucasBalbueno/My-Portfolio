import './animations/buttonProjects.js'
import textLoad from './animations/IamText.js'
import './animations/observer.js'
import './animations/vanilla-tilt.js'

textLoad()
setInterval(textLoad, 12000);

VanillaTilt.init(document.querySelectorAll("#div3dEffect"), {
    max: 20,
    speed: 300,
});