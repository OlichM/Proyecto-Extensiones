import { LitElement, html } from "lit";
import styles from "./extension-header.css.js"

export class ExtensionHeader extends LitElement{
    static properties = {

    }
    constructor(){
        super()
    }
    static get styles(){
        return styles;
    }
    render(){
        return html`
            <div class="header">
                <div class="left">
                    <slot name="logo"> </slot>
                </div>
                <div class="theme"></div>
            </div>
            <slot></slot>
        `
    }
}
customElements.define('extension-header', ExtensionHeader)