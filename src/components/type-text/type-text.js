import { LitElement, html} from "lit";
import styles from "./type-text.css.js";
import{ unsafeHTML } from 'lit/directives/unsafe-html.js';

export class TypeText extends LitElement{
    static properties = {
        text: {
            type: String
        },
        size: {
            type: String
        },
        weight: {
            type: String
        },
        variant: {
            type: String
        },
        forInput: {
            type: String
        }

    }

    constructor(){
        super();
        this.text = '';
        this.size = 'm';
        this.weight = 'regular';
        this.variant = 'variant';
    }

    static get styles(){
        return styles;  
    }
    render(){
        const classes = `
            ${this.variant}
            ${this.size}
            ${this.weight}
        `;
        return html`
            <span class="${classes}">${this.text}</span>        
    `;
    }
}
customElements.define('type-text', TypeText);