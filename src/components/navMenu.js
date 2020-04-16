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
				background: var(--landing-bg);
				border: none;
				border-radius: 1.5rem;
				cursor: pointer;
				display: flex;
				justify-content: space-between;
				align-items: center;
				position: relative;
				height: 40px;
				width: 80px;
			}

			.sun,
			.moon {
				fill: var(--toggle-icon);
				padding: 0;
				width: 1.25rem;
				height: 1.25rem;
			}

			.slider {
				fill: var(--toggle-icon);
				position: absolute;
			}

			.slider-circle {
				transition: var(--slider-transition);
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
						class="slider"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cy="10" r="4" class="slider-circle" />
					</svg>
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
