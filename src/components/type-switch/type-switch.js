import { LitElement, html } from "lit";
import styles from './type-switch.css.js'

export class TypeSwitch extends LitElement{
    static properties = {
        check: {
            type: Boolean
        }
    }
    constructor(){
        super()
        this.check = true;
    }
    HandleToggle(){
        this.dispatchEvent(new CustomEvent('switch-change',{
            detail: {
                check: !this.check
            },
            bubbles: true,
            composed: true
        }))
    }
    static get styles() {
        return styles;
    }
    render(){
        return html`
            <div class="switch ${this.check ? 'on':'off'}"
                @click=${this.HandleToggle}>
                <div class="tumb ${this.check ? 'right':'left'}"></div>
            </div>
        `
    }

}
customElements.define('type-switch', TypeSwitch);
