import { LitElement, css, html } from 'lit'
import './components/type-icon/type-icon.js'
import './components/type-text/type-text.js'
import './components/type-button/type-button.js'
import './components/type-switch/type-switch.js'
import './compositions/extension-card/extension-card.js'
import './compositions/extension-header/extension-header.js'
import { ICONS } from './utils/icons.js';
import { EXTENSIONS } from './data/extensions.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static properties = {
        filter: {
            type: String
        },
        extensions: {
          type: Array,
          attribute: false 
        }
  }

  constructor() {
    super()
    this.filter = 'all'
    this.extensions = EXTENSIONS;
  }
  getFilterExtensions(){
    switch(this.filter){
        case 'active':
          return this.extensions.filter(
            extension => extension.active
          );
        case 'inactive':
          return this.extensions.filter(
            extension => !extension.active
          );
        default:
          return this.extensions;
    }
  }
  
  toggleExtension(id, event){
    this.extensions = this.extensions.map(extension => {
      if(extension.id === id){
        return {
          ...extension,
          active: event.detail.check
        }
      }
      return extension;
    })
  }

  render() {
    const FilterExtensions = this.getFilterExtensions();
    return html`
      <extension-header>
        <type-icon 
          slot="logo"
          iconName="logo">
        </type-icon>
      </extension-header>
        <type-text 
          text="Extension List"
          size="xxl"
          weight="bold" 
        ></type-text>
        <div class="filter">
            <type-button 
              text="All" 
              variant=${this.filter === 'all' ? 'primary' : 'secondary'} 
              @button-click=${() => this.filter = 'all'}
            ></type-button>
            <type-button 
              text="Active" 
              variant=${this.filter === 'active' ? 'primary' : 'secondary'} 
              @button-click=${() => this.filter = 'active'}
            ></type-button>
            <type-button 
              text="Inactive" 
              variant=${this.filter === 'inactive' ? 'primary' : 'secondary'} 
              @button-click=${() => this.filter = 'inactive'}
            ></type-button>
        </div>
        ${FilterExtensions.map(
          extension => html`
              <extension-card
                title=${extension.title}
                description=${extension.description}
                .active=${extension.active}>
              <type-icon
                  slot='icon'
                  iconName=${extension.icon}
              ></type-icon>
              <type-switch
                slot='switch'
                .check=${extension.active}
                @change=${(e) => this.toggleExtension(extension.id, e)}
              ></type-switch>
              </extension-card>
          `)}
    `
  }
}
window.customElements.define('my-element', MyElement)
