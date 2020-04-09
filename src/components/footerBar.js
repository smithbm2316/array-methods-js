import { LitElement, html, css } from "lit-element";

export class FooterBar extends LitElement {
	static get styles() {
		return css`
			footer {
				align-items: center;
				background: var(--footer-bg);
				display: flex;
				flex-direction: column;
				margin-top: 4rem;
				padding: 0 3rem;
				text-align: center;
			}

			footer > p {
				margin: 2rem 0;
			}

			a,
			a:visited {
				color: var(--link);
				text-decoration: none;
			}

			a:hover,
			a:focus {
				color: var(--link-hover);
				text-decoration: underline;
			}

			a:active {
				color: var(--link-active);
			}
		`;
	}

	constructor() {
		super();
	}

	render() {
		return html`
			<footer>
				<p>
					Like this project? Give it a star on
					<a href="https://github.com/Smithbm2316/array-methods-js">GitHub</a>
					and share it with your friends!
				</p>
			</footer>
		`;
	}
}
