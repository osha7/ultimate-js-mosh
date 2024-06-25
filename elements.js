
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
