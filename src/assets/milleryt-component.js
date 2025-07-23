class MillerYT extends HTMLElement {
    connectedCallback() {
        console.log('MillerYT WebComponent connected');
        const ytvid = this.getAttribute('ytvid');
        console.log('ytvid:', ytvid);
        if (!ytvid) {
            this.renderError('ytvid attribute is required');
            return;
        }

        this.render(ytvid);
    }

    render(ytvid) {
        this.innerHTML = `
            <div class="lazy block is-centered videoyt milleryt">
                <iframe src="https://youtube.com/embed/${ytvid}" loading="lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style="width: 100%; height: 315px;">
                </iframe>
                <p>Direct link of <a href="https://www.youtube.com/watch?v=${ytvid}">this video on YouTube</a></p>
            </div>
        `;
    }

    renderError(message) {
        this.innerHTML = `
            <div class="error">
                <p><strong>Error:</strong> ${message}</p>
            </div>
        `;
    }
}

console.log('Defining miller-yt WebComponent');
customElements.define('miller-yt', MillerYT);
console.log('miller-yt WebComponent defined');