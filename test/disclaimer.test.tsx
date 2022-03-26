import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CookieDisclaimer } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CookieDisclaimer cookieName="test" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
