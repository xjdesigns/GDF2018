class JasonButton extends HTMLElement {

  constructor() {
    super();
    this._jasonValue = null;

    var shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
    this.setupEvents();
  }

  disconnectedCallback() {
    this.removeEvents();
  }

  static get observedAttributes() { return ['name', 'jason']; }

  attributeChangedCallback(name, oldValue, newValue) {
    console.warn(name, oldValue, newValue);
    this._jasonValue = newValue;
  }

  get jason() {
    return this._jasonValue;
  }

  set jason(v) {
    this.setAttribute('country', v);
  }

  render() {
    this.shadowRoot.innerHTML = this.renderString();
  }

  renderString() {
    return `
      <div>Jason Rocks</div>
      <button>Jason Button</button>
    `;
  }

  myCall() {
    console.warn('rocking yes sir!:!');
  }

  setupEvents() {
    var btn = this.shadowRoot.querySelector('button');
    btn.addEventListener('click', this.myCall);
  }

  removeEvents() {
    var btn = this.shadowRoot.querySelector('button');
    btn.removeEventListener('click', this.myCall);
  }
}

customElements.define('jason-button', JasonButton);
