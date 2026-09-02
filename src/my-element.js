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
        },
        darkMode: {
          type: Boolean
        }
  }

  constructor() {
    super()
    this.filter = 'all'
    this.extensions = EXTENSIONS;
    this.darkMode = false;
  }
  getExtensionsFilter(){
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
  
  changeExtensionState(id, event){
      this.extensions = this.extensions.map(extension => {
        if(extension.id === id){
          return {
            ...extension,
            active: event.detail.check  
          }
        }
        return extension;
      })
        this.extensions.sort((a, b) => {
        return Number(b.active) - Number(a.active);
    });
  }
  toggleTheme() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle(
    'dark-theme',
    this.darkMode
  );
    }
  removeExtension(id) {
      const confirmed = confirm(
          '¿Deseas eliminar esta extensión?'
      );
      if (!confirmed) return;
      this.extensions = this.extensions.filter(
          extension => extension.id !== id
      );
  }
  static get styles() {
    return styles;
  }

  render() {
    return html`
      <div class="theme ${this.darkMode ? 'dark' : 'light'}">
        <div class="container">
          <extension-header .darkMode=${this.darkMode} @theme-change=${this.toggleTheme}> 
            <div class="header-content">
              <type-text 
                text="Extensions List" 
                size="m"
                weight="bold"
              ></type-text>
              <div class="filter">
                  <type-button 
                    text="All" 
                    .darkMode=${this.darkMode}
                    variant=${this.filter === 'all' ? 'primary' : 'secondary'} 
                    @button-click=${() => this.filter = 'all'}
                  ></type-button>
                  <type-button 
                    text="Active" 
                    .darkMode=${this.darkMode}
                    variant=${this.filter === 'active' ? 'primary' : 'secondary'} 
                    @button-click=${() => this.filter = 'active'}
                  ></type-button>
                  <type-button 
                    text="Inactive" 
                    .darkMode=${this.darkMode}
                    variant=${this.filter === 'inactive' ? 'primary' : 'secondary'} 
                    @button-click=${() => this.filter = 'inactive'}
                  ></type-button>
              </div>
            </div>
          </extension-header>
          <div class="extension-grid">
            ${this.getExtensionsFilter().map(
              extension => html`
                <extension-card
                    title=${extension.title}
                    description=${extension.description}
                    .active=${extension.active}
                    .darkMode=${this.darkMode}
                    @remove-extension=${() => this.removeExtension(extension.id)}>
                  <type-icon
                      slot='icon'
                      iconName=${extension.icon}
                  ></type-icon>
                  <type-switch
                    slot='switch'
                    .check=${extension.active}
                    @switch-change=${(e) => this.changeExtensionState(extension.id, e)}
                  ></type-switch>
                </extension-card>
              `)}
          </div>
        </div>
      </div>
    `
  }
}
window.customElements.define('my-element', MyElement)
