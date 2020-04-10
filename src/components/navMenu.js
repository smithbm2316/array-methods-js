import { LitElement, html, css } from "lit-element";

export class NavMenu extends LitElement {
	static get styles() {
		return css`
			nav {
				display: flex;
				justify-content: space-between;
				margin: 0 auto;
				width: 80%;
			}

			nav a,
			.toggle-theme {
				font-family: "Gilles Gothic", --apple-system, Helvetica, Arial,
					sans-serif;
				font-weight: normal;
				font-size: 2rem;
				text-decoration: none;
				text-shadow: var(--nav-shadow);
				z-index: 1;
			}

			nav a,
			nav a:visited,
			.toggle-theme {
				color: var(--nav-text);
			}

			nav a:hover,
			nav a:focus,
			.toggle-theme:hover,
			.toggle-theme:focus {
				text-decoration: underline;
			}

			.toggle-theme {
				/* resets for styling */
				background: inherit;
				border: 0;
				border-radius: 0.5rem;
				cursor: pointer;
				white-space: nowrap;
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
				<button class="toggle-theme">Toggle me!</button>
			</nav>
		`;
	}
}
