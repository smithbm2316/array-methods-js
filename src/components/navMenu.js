import { LitElement, html, css } from "lit-element";

export class NavMenu extends LitElement {
  static get styles() {
    return css`
      nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-family: "Gilles Gothic", --apple-system, Helvetica, Arial,
          sans-serif;
        font-size: 2rem;
        margin: 0 auto;
        width: 80%;
      }

      nav a,
      .toggle-theme {
        font-weight: normal;
        text-shadow: var(--nav-shadow);
        z-index: 1;
      }

      nav a,
      nav a:visited,
      .toggle-theme {
        color: var(--link);
        text-decoration: none;
      }

      nav a:hover,
      nav a:focus {
        color: var(--link-hover);
        text-decoration: underline;
      }

      nav a:active {
        color: var(--link-active);
      }

      .toggle-theme {
        background: var(--bg);
        color: var(--link);
        border-radius: 0.75rem;
        border: none;
        cursor: pointer;
        padding: 0;
        transition: 0.3s ease;
        display: flex;
        justify-content: center;
      }

      .toggle-theme:hover,
      .toggle-theme:focus {
        background: var(--landing-bg);
        box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
      }

      .sun,
      .moon {
        padding: 0.5rem;
        width: 32px;
        height: 32px;
      }

      .toggle-hidden {
        display: none;
      }

      @media (min-width: 600px) {
        nav {
          width: 80%;
        }

        nav a,
        .toggle-theme {
          font-size: 1.75rem;
        }
      }

      @media (min-width: 420px) {
        nav {
          width: 100%;
        }

        nav a,
        .toggle-theme {
          font-size: 2rem;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <nav aria-labelledby="primary-navigation">
        <a href="./map.html">Map</a>
        <a href="./filter.html">Filter</a>
        <a href="./reduce.html">Reduce</a>
        <button class="toggle-theme">
          <svg class="sun" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg class="moon" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            ></path>
          </svg>
        </button>
      </nav>
    `;
  }
}
