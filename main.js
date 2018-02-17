console.log('get my-element', customElements.get('my-element'));
console.log('get my-second-element', customElements.get('my-second-element'));

// Using factory function to get Constructor for custom elements
function getConstructor() {
  var MyElement = function () {
    return HTMLElement.call(this)
  }
  Object.setPrototypeOf(MyElement.prototype, HTMLElement.prototype);
  Object.setPrototypeOf(MyElement, HTMLElement);

  MyElement.prototype.attributeChangedCallback = function (name, old, value) {
      this.value = value;
      console.log('Attribute changed', name, old, value);
      // alert(value);
  };
  MyElement.observedAttributes = ['value'];

  return MyElement
}

customElements.define('my-element', getConstructor());
console.log('registered my-element');
console.log('get my-element', customElements.get('my-element'));
console.log('get my-second-element', customElements.get('my-second-element'));
customElements.define('my-second-element', getConstructor());
console.log('registered my-second-element');
console.log('get my-element', customElements.get('my-element'));
console.log('get my-second-element', customElements.get('my-second-element'));
