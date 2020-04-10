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
				height: 20px;
				width: 20px;
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
				<button class="toggle-theme">
					<svg
						class="hide"
						fill="currentColor"
						viewBox="0 0 20 20"
						class="w-8 h-8"
					>
						<path
							fill-rule="evenodd"
							d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
							clip-rule="evenodd"
						></path>
					</svg>
					<svg fill="currentColor" viewBox="0 0 20 20" class="w-8 h-8">
						<path
							d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
						></path>
					</svg>
				</button>
			</nav>
		`;
	}
}
