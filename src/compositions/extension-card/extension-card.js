import { LitElement, html } from "lit";
import styles from "./extension-card.css.js"
import '../../components/type-button/type-button.js'
import '../../components/type-switch/type-switch.js'

export class ExtensionCard extends LitElement{
    static properties = {
        title: {
            type: String
        },
        description: {
            type: String
        },
        darkMode: {
            type: Boolean
        }
    }
    constructor(){
        super()
        this.title = '';
        this.description = '';
    }
    static get styles(){
        return styles;
    }
    render(){
        return html`
            <div class="card ${this.darkMode ? 'dark' : 'light'}">
                <div class="top">
                    <div class="icon">
                        <slot name="icon"></slot>
                    </div>
                    <div class="content">
                        <h3>${this.title}</h3>
                        <p>${this.description}</p>
                    </div>    
                </div>
                <div class="footer">
                            <type-button text="Remove"></type-button>
                            <slot name="switch"></slot>
                </div>
            </div>
        `
    }
}
customElements.define('extension-card', ExtensionCard);