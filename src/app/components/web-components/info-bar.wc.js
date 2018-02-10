class InfoBar extends HTMLElement {
  constructor() {
    super()
    this._isToggleActive = false;
    this.toggleOpenState = this.toggleOpenState.bind(this);
    this.setupEvents = this.setupEvents.bind(this);
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {

  }

  render() {
    this.innerHTML = this.renderString();
    this.setupEvents();
  }

  renderString() {
    return `
      <h1>Info Bar</h1>
      <div class="${this._isToggleActive ? 'is-open' : ''}"></div>
      <button>Open</button>
    `
  }

  static get observedAttributes() {
    return ['toggle'];
  }

  get toggle() {
    return this._isToggleActive;
  }

  set toggle(val) {
    this.setAttribute('is-toggle-open', val);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this._isToggleActive = newValue;
  }

  setupEvents() {
    let btn = this.querySelector('button');
    btn.addEventListener('click', this.toggleOpenState);
  }

  toggleOpenState() {
    this._isToggleActive = !this._isToggleActive;
    this.render();
  }
}

customElements.define('info-bar', InfoBar);


customElements.whenDefined('info-bar').then(() => {
  console.log('info-bar defined');
});
