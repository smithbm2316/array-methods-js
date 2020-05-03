import { LitElement, html, css } from "lit-element";

export class BannerLogo extends LitElement {
  static get styles() {
    return css`
      :host * {
        padding: 0;
        margin: 0;
      }

      .logo {
        display: flex;
        justify-content: center;
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
        margin: 0;
        padding: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
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
        .logo h1 {
          font-size: 2.5rem;
        }

        .logo p {
          font-size: 3rem;
        }
      }

      @media (max-width: 380px) {
        .logo h1 {
          font-size: 2.25rem;
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
