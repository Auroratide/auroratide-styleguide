(() => {
  const html = `
    <span class="hex"></span>
  `;

  const css = `
    :host {
      display: block;
      color: white;
      padding: 1em;
      margin: 0 1em;
    }
  `;
  
  const template = document.createElement('template');
  template.innerHTML = `<style>${css}</style>${html}`;

  window.customElements.define('color-shade', class extends HTMLElement {
    constructor() {
      super();

      this
        .attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true));

      this.shadowRoot.querySelector('.hex').textContent = this.hex;
      this.shadowRoot.host.style.backgroundColor = this.hex;
    }

    get hex() {
      return this.getAttribute('hex');
    }
  });
})();
