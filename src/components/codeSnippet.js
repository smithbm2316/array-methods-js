import { LitElement, html, css } from "lit-element";

export class CodeSnippet extends LitElement {
	static get properties() {
		return { cliptarget: String };
	}

	static get styles() {
		return css`
			:host * {
				margin: 0;
				padding: 0;
			}

			.snippet {
				background: var(--snippet-gradient);
				box-shadow: var(--snippet-shadow);
				border-radius: 0.6rem;
				padding: 3px;
				position: relative;
			}

			.language-js {
				font-family: "JetBrains Mono", monospace;
			}

			.snippet-copy {
				/* resets for styling */
				background: transparent;
				border: 0;
				border-radius: 0.5rem;
				color: var(--copy-btn);
				cursor: pointer;
				white-space: nowrap;

				/* sizing and positioning */
				width: 1.25rem;
				height: 1.25rem;
				position: absolute;
				top: 0.9rem;
				right: 0.9rem;
			}

			.snippet-copy:hover {
				color: var(--copy-hover);
			}

			.snippet-copy:focus,
			.snippet-copy:active {
				color: var(--copy-focus-active);
			}

			/* Copy button transition animation */
			.snippet-copy svg {
				transform-origin: 50% 50%;
			}
		`;
	}

	constructor() {
		super();
		this.cliptarget = "ex";
	}

	render() {
		return html`
			<div class="snippet">
				<button
					class="snippet-copy"
					aria-label="Copy Snippet to clipboard"
					data-clipboard-target="${this.cliptarget}"
				>
					<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
						/>
					</svg>
				</button>
				<slot name="pre">
					<slot name="code"></slot>
				</slot>
			</div>
		`;
	}
}
