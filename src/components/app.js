import "tailwindcss"

/**
 *
 * @param {Element[]} children
 * @returns {string}
 * @constructor
 */
function App(children) {
    return `
<div class="container-full">
    ${children.map((child) => child.outerHTML).join("")}
</div>
`
}

customElements.define('x-app', class extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const children = Array.from(this.children)

        this.innerHTML = App(children)
    }

    render2() {
        const children = Array.from(this.children)

        const container = document.createElement("div")
        container.setAttribute("class", "container mx-auto")

        container.innerHTML = `
<h1 class="text-red-500 text-xl font-bold">This is a great app</h1>
<p>Of course, this is bellow the slot</p>
`
        children.forEach(child => container.appendChild(child));

        this.innerHTML = container.outerHTML
    }
});
