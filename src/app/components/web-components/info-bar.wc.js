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
    return ['toggle-open'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.warn('name', name);
    console.warn('oldValue', oldValue);
    console.warn('newValue', newValue);
  }

  // these are for attributes
  // get isToggleActive() {
  //   return this._isToggleActive;
  // }
  //
  // set isToggleActive(state) {
  //   console.warn('state', state);
  //   this.setAttribute('class', state);
  // }

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
