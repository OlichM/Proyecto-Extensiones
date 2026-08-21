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
  static get properties() {
    return {
    }
  }

  constructor() {
    super()
  }

  render() {
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
            <type-button text="all" variant="primary"></type-button>
            <type-button text="active"></type-button>
            <type-button text="inactive"></type-button>
        </div>
        <extension-card 
          title="DevLens" 
          description="Quickly inspect page layouts and visualize element boundaries.">
          <type-icon slot="icon" iconName="devlens"></type-icon>
        </extension-card>
        <extension-card 
          title="StyleSpy"
          description="Instantly analyze and copy CSS from any webpage element.">
        <type-icon slot="icon" iconName="stylespy"></type-icon>
        </extension-card>
          
    `
  }
}
window.customElements.define('my-element', MyElement)
