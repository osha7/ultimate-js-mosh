
function HtmlElement() {
    this.click = function() {
        console.log('clicked')
    }
}

HtmlElement.prototype.focus = function() {
    console.log('focused')
}

const e = new HtmlElement();

function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function(item) {
        this.items.push(item)
        console.log(this.items)
    }
    this.removeItem = function() {
        this.removeItem = function(item) {
            this.items.splice(this.items.indexOf(item), 1)
        }
    }
}

// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype); ==> we lose click()
HtmlSelectElement.prototype = new HtmlElement()
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const s = new HtmlSelectElement();

// ---------------------------------------------------------------


 function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function HtmlElement() {
    this.click = function() {
        console.log('clicked')
    }
}

HtmlElement.prototype.focus = function() {
    console.log('focused')
}

const e1 = new HtmlElement();

function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function(item) {
        this.items.push(item)
        console.log(this.items)
    }
    this.removeItem = function() {
        this.removeItem = function(item) {
            this.items.splice(this.items.indexOf(item), 1)
        }
    }
    this.render = function() {
        return `
        <select>${this.items.map(i => `
        <option>${i}</option>`).join('')}
        </select>`;
    }
}

// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype); ==> we lose click()
HtmlSelectElement.prototype = new HtmlElement()
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const s1 = new HtmlSelectElement([1, 2, 3]);

function HtmlImageElement(src) {
    this.src = src
    this.render = function() {
        return `<img src="${this.src}" />`
    }
}

extend(HtmlImageElement, HtmlSelectElement);

const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement("http://")
];

for (let element of elements)
    console.log(element.render())