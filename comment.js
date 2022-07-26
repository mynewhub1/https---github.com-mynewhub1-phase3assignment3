class Comment extends HTMLElement {
  constructor() {
    super();
    }


    connectedCallback() {
    this.innerHTML = `<section class="comment">
    
    <div id="app"></div>
    <h2>${this.getAttribute("name")}</h2>
    <h2>${this.getAttribute("email")}</h2>
    <p>${this.getAttribute("comment")}</p>
    </section>`;
  }
}

customElements.define('custom-comment', Comment);
