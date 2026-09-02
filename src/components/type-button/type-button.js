import { LitElement, html } from "lit";
import styles from "./type-button.css.js"

export class TypeButton extends LitElement{
    static properties ={
        text: {
            type: String
        },
        variant: {
            type: String
        },
        darkMode: {
            type: Boolean
        }
    }
    constructor(){
        super()
        this.text = '';
        this.variant = '';
        this.darkMode = false;
    }
    static get styles() {
        return styles;
    }
    _handleClick(){
        this.dispatchEvent(new CustomEvent('button-click',{
            bubbles: true,
            composed: true
        }))
    }
    
    render() {
        return html`
            <button 
                class="${this.darkMode ? 'dark' : 'light'} ${this.variant}" 
                @click=${this._handleClick}
                >
                ${this.text}
                <slot></slot>
            </button>
        `
    }
}
customElements.define('type-button',TypeButton);