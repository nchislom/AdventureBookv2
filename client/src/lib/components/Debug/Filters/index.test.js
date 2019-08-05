import React from 'react';
import renderer from 'react-test-renderer';
import DebugFilters from './index';

describe('DebugFilters', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<DebugFilters />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
