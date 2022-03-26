import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Footer } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const footer = document.createElement('footer');
    ReactDOM.render(
      <Footer
        ad={{ redirect_url: '', image_url: '', alt_text: '' }}
        author={{ name: 'me', redirect_url: '#' }}
        version="0.0.0"
      />,
      footer
    );
    ReactDOM.unmountComponentAtNode(footer);
  });
});
