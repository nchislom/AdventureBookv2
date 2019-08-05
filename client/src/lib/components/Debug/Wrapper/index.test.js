import React from 'react';
import renderer from 'react-test-renderer';
import DebugWrapper from './index';

describe('Debug', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<DebugWrapper />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
