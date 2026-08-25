import { LitElement, css, html } from 'lit'
import './components/type-icon/type-icon.js'
import './components/type-text/type-text.js'
import './components/type-button/type-button.js'
import './components/type-switch/type-switch.js'
import './compositions/extension-card/extension-card.js'
import './compositions/extension-header/extension-header.js'
import { EXTENSIONS } from './data/extensions.js';
import styles from './my-element.css.js'

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
  getExtensionsFilter(){
    switch(this.filter){
        case 'active':
          return this.extensions.filter(
            e => e.active
          );
        case 'inactive':
          return this.extensions.filter(
            e => !e.active
          );
        default:
          return this.extensions;
    }
  }
  
  changeExtensionState(id, event){
    this.extensions = this.extensions.map(e => {
      if(e.id === id){
        return {
          ...e,
          active: event.detail.check
        }
      }
      return e;
    })
  }

  static get styles() {
    return styles;
  }

  render() {
    const FilterExtensions = this.getExtensionsFilter();
    return html`
      <extension-header>
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
      </extension-header>
      <div class="extension-grid">
        ${FilterExtensions.map(
          e => html`
            <extension-card
                title=${e.title}
                description=${e.description}
                .active=${e.active}>
              <type-icon
                  slot='icon'
                  iconName=${e.icon}
              ></type-icon>
              <type-switch
                slot='switch'
                .check=${e.active}
                @switch-change=${(e) => this.changeExtensionState(e.id, e)}
              ></type-switch>
            </extension-card>
          `)}
      </div>
    `
  }
}
window.customElements.define('my-element', MyElement)
