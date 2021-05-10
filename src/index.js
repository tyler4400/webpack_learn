console.log('hello, webpack');

// require('./index.scss')
import './index.scss';
import Icon from './icon.png'
import aFn, { Animal } from './a'

aFn()
const cat = new Animal('cat, miao miao miao')
console.log(cat.getName());

function component() {
    var element = document.createElement('div');

    element.innerHTML = 'Hello' + 'webpack!!'
    element.classList.add('hello');

    const myIcon = new Image()
    myIcon.src = Icon
    element.appendChild(myIcon)

    return element;
}

document.body.appendChild(component());
