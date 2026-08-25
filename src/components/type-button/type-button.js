import { LitElement, html } from "lit";
import styles from "./type-button.css.js"

export class TypeButton extends LitElement{
    static properties ={
        text: {
            type: String
        },
        variant: {
            type: String
        }
    }
    constructor(){
        super()
        this.text = '';
        this.variant = '';
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
    toggleTheme(){
        this.dispatchEvent(
            new CustomEvent('theme-change', {
                bubbles: true,
                composed: true
            }))
    }
    render() {
        return html`
            <button 
                class="${this.variant}"
                @click=${this._handleClick}
                >
                ${this.text}
            </button>
        `
    }
}
customElements.define('type-button',TypeButton);