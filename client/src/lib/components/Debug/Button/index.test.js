import React from 'react';
import renderer from 'react-test-renderer';
import DebugButton from './index';

describe('DebugButton', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<DebugButton />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
