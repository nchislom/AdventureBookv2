import React from 'react';
import renderer from 'react-test-renderer';
import DebugContext from './index';

describe('DebugContext', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<DebugContext />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
