import React from 'react';
import renderer from 'react-test-renderer';
import Debug from './index';
import Card from '../Card';

describe('DebugStory', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<Debug><Card className="text-center" text="Test" /></Debug>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
