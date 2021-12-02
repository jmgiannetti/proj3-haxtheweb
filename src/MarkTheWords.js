// dependencies / things imported
import { LitElement, html, css } from 'lit';

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
    this.answers = "";
    this.correctAnswers = [];
    //parse text
    this.wordList = this.innerText.split(/\s+/g);
    this.innerText = "";
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
      if (propName === "wordList") {
        this.rebuildContents(this[propName]);
      }
      if (propName === "answers" && this[propName]) {
        this.correctAnswers = this[propName].split(",");
        this.answers = null;
      }
    });
  }

  rebuildContents(ary) {
    //wipe out inner
    this.shadowRoot.querySelector("#textArea").innerHTML = "";
    ary.forEach((word) => {
      let span = document.createElement("span");
      span.innerText = word;
      span.setAttribute("tabindex", "-1");
      span.addEventListener("click", this.selectWord.bind(this));

      this.shadowRoot.querySelector("#textArea").appendChild(span);
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
    return [css`
    :host {
      display: block;
      padding: 16px;
      margin: 16px;
      border: 2px solid black;
    }
    span {
      display: inline-flex;
      font-size: var(--x-ample-font-size, 24px);
      padding: 2px;
      margin: 0 2px;
    }
    span:hover,span:focus
    {
      outline: 2px dashed blue;
      cursor: pointer;        
    }
    span[data-selected] {
      outline: 2px solid purple;
    }
    span[data-selected]:hover,
    span[data-selected]:focus
    {
      outline: 2px solid blue;
    }
    span[data-status="correct"] {
      outline: 2px solid purple;
    }
    span[data-status="correct"]::after {
      content: "+1";
      font-size: 14px;
      color: green;
      font-weight: bold;
      border-radius: 50%;
      border: 2px solid purple;
      padding: 4px;
      margin-left: 8px;
      line-height: 14px;
    }
    span[data-status="incorrect"] {
      outline: 2px solid red;
    }
    span[data-status="incorrect"]::after {
      content: "-1";
      font-size: 14px;
      color: red;
      font-weight: bold;
      border-radius: 50%;
      border: 2px solid red;
      padding: 4px;
      margin-left: 8px;
      line-height: 14px;
    }
    .buttons,.correct {
      margin: 8px;
    }
  `];
  }

  selectWord(e) {
    const el = e.target;
    if (el.getAttribute("data-selected")) {
      el.removeAttribute("data-selected")
    }
    else {
      el.setAttribute("data-selected", "data-selected");
    }
  }

  checkAnswer(e) {
    const selected = this.shadowRoot.querySelectorAll("#textArea span[data-selected]");
    console.log(selected);
    for (var i = 0; i < selected.length; i++) {
      const el = selected[i];
      console.log(this.correctAnswers);
      console.log(el.innerText);
      console.log(this.correctAnswers.includes(el.innerText));
      if (this.correctAnswers.includes(el.innerText.replace(/[&#^,+()$~%.":*?<>{}]/g, ''))) {
        el.setAttribute("data-status", "correct");
      }
      else {
        el.setAttribute("data-status", "incorrect");
      }
    }
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div id="textArea">
      </div>
        <div class = "buttons">
          <button @click="${this.checkAnswer}">Check</button>
      </div>
      <div class="correct">
        <h1>Correct Answers</h1>
        <ul> ${this.correctAnswers.map((item, i) => html`<li data-index="${i}">${item}</li>`)}
    </ul>
    </div>
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
