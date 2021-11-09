// dependencies / things imported
import { LitElement, html, css } from 'lit';
import { LitElement, css, html } from "https://unpkg.com/lit@2.0.2/index.js?module";

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class MarkTheWords extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'mark-the-words';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      wordList: { type: Array },
      answers: { type: String, reflect: true },
      correctAnswers: { type: Array }
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      
    });
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved
  connectedCallback() {
    super.connectedCallback();
  }

  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <h1>Make me awesome</h1>
      <p>Build the future we.</p>
      <slot></slot>
    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`../lib/mark-the-words.haxProperties.json`, import.meta.url).href;
  }
}
