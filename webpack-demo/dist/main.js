(()=>{"use strict";const s=new WeakMap;new class{constructor(t){s.set(this,t)}draw(){console.log("Circle with radius "+s.get(this))}}(10).draw})();