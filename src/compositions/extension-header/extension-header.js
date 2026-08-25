import { LitElement, html } from "lit";
import styles from "./extension-header.css.js"
import '../../components/type-icon/type-icon.js'

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
                    <type-icon iconName="logo"></type-icon>
                    <type-text 
                        text="Extension List"
                        size="m"
                        weight="bold" 
                    ></type-text>
                </div>
                <div class="theme">
                    <type-button iconName="icon-sun"
                        @theme-change=${this.changeTheme}
                    ></type-button>
                </div>
            </div>
            <slot></slot>
        `
    }
}
customElements.define('extension-header', ExtensionHeader)