import { LitElement, html } from 'lit';
import styles from './type-icon.css.js';
import { ICONS } from '../../utils/icons.js';

export class TypeIcon extends LitElement{
    static properties = {
        iconName: {
            type: String
        },
        darkMode:{
            type: Boolean
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
                class="${this.darkMode ? 'logo-light' : 'logo-dark'} 
                ${this.iconName === 'logo' ? 'logo-icon' : 
                    this.iconName === 'sun'  ||  this.iconName === 'moon' ? 'theme-icon' : 'icon'}">
        `;
        }
        
    render(){
        return html`
        ${this._renderIcon()}
        `;
    } 
}
customElements.define("type-icon",TypeIcon);