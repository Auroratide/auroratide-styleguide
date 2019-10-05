(() => {
  const html = `
    <h2 class="name"></h2>
    <slot></slot>
  `;

  const css = `
    :host {
      text-align: center;
    }

    .name {
      margin: 0;
      margin-bottom: 0.5em;
    }
  `;

  const template = document.createElement('template');
  template.innerHTML = `<style>${css}</style>${html}`;

  window.customElements.define('color-palette', class extends HTMLElement {
    constructor() {
      super();

      this
        .attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true));

      this.shadowRoot.querySelector('.name').textContent = this.name;
    }

    get name() {
      return this.getAttribute('name');
    }
  });
})();
