import { LitElement, html, css } from "lit-element";

export class BannerLogo extends LitElement {
  static get styles() {
    return css`
      :host * {
        padding: 0;
        margin: 0;
      }

      .logo {
        align-items: center;
        display: flex;
        flex-direction: column;
        font-family: "Streamster";
        position: relative;
      }

      .logo a {
        cursor: pointer;
        text-decoration: none;
        z-index: 1;
      }

      .logo h1 {
        /* Gradient on text */
        background: var(--logo-gradient);
        background-clip: text;
        color: transparent;
        -webkit-background-clip: text;

        font-size: 4.5rem;
        padding: 1.5rem;
        transition: 0.75s ease;
        text-shadow: var(--logo-shadow);
        z-index: 1;
      }

      .logo h1:hover {
        background: var(--logo-gradient-hover);
        background-clip: text;
        color: transparent;
        -webkit-background-clip: text;

        text-shadow: var(--logo-shadow-hover);
      }

      .logo p {
        color: var(--logo-brackets);
        font-size: 8rem;
        position: absolute;
        z-index: 0;
      }

      @media (max-width: 800px) {
        .logo h1 {
          font-size: 4rem;
        }

        .logo p {
          font-size: 7.5rem;
        }
      }

      @media (max-width: 600px) {
        .logo h1 {
          font-size: 3rem;
        }

        .logo p {
          font-size: 6rem;
        }
      }

      @media (max-width: 420px) {
        .logo {
          margin: 1.5rem 0;
        }

        .logo h1 {
          font-size: 2.5rem;
        }

        .logo p {
          font-size: 6rem;
        }
      }

      @media (max-width: 380px) {
        .logo h1 {
          font-size: 2.25rem;
        }

        .logo p {
          font-size: 5rem;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="logo">
        <a href="/">
          <h1>Array Methods</h1>
        </a>
        <p>[]</p>
      </div>
    `;
  }
}
