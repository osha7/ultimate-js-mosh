console.log('Hello World');

// --------------------------------------------------------------------------------

// ------> code for 'circle.js' module:

// // const _radius = new WeakMap();

// // class Circle {
// //     constructor(radius) {
// //         _radius.set(this, radius);
// //     }

// //     draw() {
// //         console.log('Circle with radius ' + _radius.get(this));
// //     }
// // }

// const Circle = require('./circle');

// const c = new Circle(10);
// c.draw();


// --------------------------------------------------------------------------------



// ------> code for 'circle2.js' module:

import {Circle2} from './circle2.js';

const c = new Circle2(10);
c.draw;

// --------------------------------------------------------------------------------
