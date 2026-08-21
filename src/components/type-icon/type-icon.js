import { LitElement, html } from 'lit';
import styles from './type-icon.css.js';
import { ICONS } from '../../utils/icons.js';

export class TypeIcon extends LitElement{
    static properties = {
        iconName: {
            type: String
        }
    }
    constructor(){
        super();
        this.iconName= '';
    }
    static get styles(){
        return styles;
    }
    _renderIcon (){
        const icon = ICONS[this.iconName];
        return html`
            <img src="${icon}"
                class="${this.iconName === 'logo' ? 'logo-icon' : 'icon'}">
        `;
        }
        
    render(){
        return html`
        ${this._renderIcon()}
        `;
    } 
}
customElements.define("type-icon",TypeIcon);