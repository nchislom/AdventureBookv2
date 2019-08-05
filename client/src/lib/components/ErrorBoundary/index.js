import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from '../Card';
import { resetStory } from '../../actions/story';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { children, dispatch, ...rest } = this.props;
    const { error } = this.state;

    if (error) {
      return (
        <div className="story styled">
          <div className="container">
            <Card className="bg-danger mt-3 mx-auto text-left text-white">
              <div className="card-body">
                <h5 className="card-title">Oops ! Something went wrong</h5>
                <p className="card-text">Try refreshing your page or reset your game save :-(</p>
                <button className="btn btn-outline-light" onClick={() => dispatch(resetStory())} type="button">
                  Reset game save
                </button>
              </div>
            </Card>
          </div>
        </div>
      );
    }

    return React.cloneElement(children, rest);
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(ErrorBoundary);
