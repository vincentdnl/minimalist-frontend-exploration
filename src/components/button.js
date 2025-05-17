import {effect} from "../libs/effect.js";
import {clicked} from "../signals/clicked.js";
import {name} from "../signals/name.js";
import {fetchUsers} from "../signals/fetchUsers.js";

customElements.define('x-button', class extends HTMLElement {
    constructor() {
        super()

        effect(() => {
            this.name = name.get()
            this.render()
        })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const button = document.createElement('button')
        button.className = "px-4 py-2 rounded-md bg-teal-200 hover:bg-teal-400 font-bold cursor-pointer"
        button.innerText = `clicked ${clicked.get()}`
        button.addEventListener('click', fetchUsers)

        this.innerHTML = ``
        this.appendChild(button)
    }
});
