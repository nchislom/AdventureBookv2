import React from 'react';
import renderer from 'react-test-renderer';
import Card from './index';

describe('Card', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(
        <Card className="bg-primary text-white text-center p-3">
          <blockquote className="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
            <footer className="blockquote-footer">
              <small>
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
