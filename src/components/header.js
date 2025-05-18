import {effect} from "../libs/effect.js";
import {name} from "../signals/name.js";

/**
 *
 * @param {string} name
 * @returns {string}
 * @constructor
 */
function Header (name) {
    return `
<div class="px-4 py-2 flex justify-between bg-teal-600 text-white">
    <div class="font-bold">My Awesome app</div>
    <div>Hello ${name}</div>
</div>
`
}

customElements.define('x-header', class extends HTMLElement {
    constructor() {
        super()

        effect(() => {
            this.name = name.get().toUpperCase()
            this.render()
        })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = Header(this.name)
    }
});
