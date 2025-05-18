import {effect} from "../libs/effect.js";
import {name} from "../signals/name.js";
import {content} from "../signals/content.js";

/**
 *
 * @param {string} name
 * @param {string} content
 * @returns {string}
 * @constructor
 */
function Content (name, content) {
    return `
<div class="container mx-auto py-8">
    <h1 class="text-teal-900 text-xl font-bold mb-8">This is a great app</h1>
    <div class="mb-2">Content for: ${name}</div>
${content.length > 0 ? `<div class="mb-2 bg-purple-100 rounded-lg p-4 whitespace-pre overflow-hidden">${content}</div>` : ''}
    <x-button>Get content</x-button>
</div>
`
}

customElements.define('x-content', class extends HTMLElement {
    constructor() {
        super()

        this.content = content.get()

        effect(() => {
            this.name = name.get()
            this.render()
        })

        effect(() => {
            this.content = content.get()
            this.render()
        })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = Content(this.name, this.content)
    }
});
