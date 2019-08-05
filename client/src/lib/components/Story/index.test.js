import React from 'react';
import renderer from 'react-test-renderer';
import Story from './index';

describe('Story', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<Story />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
