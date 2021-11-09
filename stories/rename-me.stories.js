import { html } from 'lit';

import '../mark-the-words.js';

export default {
  title: 'Rename me',
  component: 'mark-the-words',
  argTypes: {
    need: { control: 'text' },
  },
};

function Template({ need = 'rename', slot }) {
  return html` <mark-the-words need="${need}"> ${slot} </mark-the-words> `;
}
export const Card = Template.bind({});

export const ScienceCard = Template.bind({});
ScienceCard.args = {
  need: 'science',
  slot: html`<p>slotted content that should render</p>`,
};
