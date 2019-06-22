// CommOnJS 스펙의 모듈 가져오기
var _ = require('lodash');

import {area,circumference} from "./js/cricle";
import aaa from './js/cube';
import './style.css';
import './hello.scss';



function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello!!!이것도변경했지요!!', 'webpack'], ' ');

  return element;
}


console.log('webapck test');
console.log(circumference(5));
console.log(area(5));
console.log(aaa(555));


document.body.appendChild(component());