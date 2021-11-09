import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../mark-the-words.js';

describe('MarkTheWords', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<mark-the-words></mark-the-words>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('cool');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
