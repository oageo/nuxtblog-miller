class MillerYT extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const ytvid = this.getAttribute('ytvid');
        if (!ytvid) {
            this.renderError('ytvid attribute is required');
            return;
        }

        this.render(ytvid);
    }

    render(ytvid) {
        this.shadowRoot.innerHTML = `
            <div class="lazy block is-centered videoyt milleryt">
                <iframe src="https://youtube.com/embed/${ytvid}" loading="lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                    <div class="milleryterror">
                        <p>milleryt.vue: something broken.</p>
                        <ul>
                            <li>ytvid: ${ytvid}</li>
                            <li>Please access to <a href="https://www.youtube.com/watch?v=${ytvid}">youtube.com</a></li>
                        </ul>
                    </div>
                </iframe>
                <p>Direct link of <a href="https://www.youtube.com/watch?v=${ytvid}">this video on YouTube</a></p>
            </div>
        `;
    }

    renderError(message) {
        this.shadowRoot.innerHTML = `
            <style>
                .error {
                    background: #ffebee;
                    color: #c62828;
                    padding: 1rem;
                    border-radius: 4px;
                    border-left: 4px solid #c62828;
                }
            </style>
            <div class="error">
                <p><strong>Error:</strong> ${message}</p>
            </div>
        `;
    }
}

customElements.define('milleryt', MillerYT);