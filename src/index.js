import style from'./index.scss'
import avatar from './avatar.png'
import createAvatar from './creatAvatar.js'

createAvatar();

let img = new Image();
img.src = avatar;
img.classList.add(style.avatar);
let root = document.querySelector('#root');
root.append(img);