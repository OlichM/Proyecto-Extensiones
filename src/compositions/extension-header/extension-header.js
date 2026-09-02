import { LitElement, html } from "lit";
import styles from "./extension-header.css.js"
import '../../components/type-icon/type-icon.js'

export class ExtensionHeader extends LitElement{
    static properties = {
        darkMode: {
            type: Boolean
        }
    }
    constructor(){
        super()
        this.darkMode = false;
    }
    static get styles(){
        return styles;
    }

    themeSwitchButton(){
        this.dispatchEvent(new CustomEvent('theme-change', {
            bubbles: true,
            composed: true
        }))
    }
    render(){
        return html`
            <div class="header ${this.darkMode ? 'dark' : 'light'}">
                <div class="logo-container">
                    <type-icon iconName="logo"></type-icon>
                </div>
                <div>
                    <type-button 
                        .darkMode=${this.darkMode} 
                        @button-click=${this.themeSwitchButton}>
                        <type-icon 
                            iconName=${this.darkMode ? 'sun' : 'moon'}>
                        </type-icon>
                    </type-button>
                </div>
            </div>
            <slot></slot>
        `
    }
}
customElements.define('extension-header', ExtensionHeader)