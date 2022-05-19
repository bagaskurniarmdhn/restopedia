class herobar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
    <div class="hero_inner">
      <h1 class="hero__title">
          Mau Pergi Makan Tapi Bingung ?
      </h1>
      <p class="hero__tagline">
        Ayo Lihat List Restaurant Terbaikmu
      </p>
    </div>
  </div>`;
  }
}

customElements.define('hero-bar', herobar);
