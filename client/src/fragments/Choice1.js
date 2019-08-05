import React from 'react';
import PropTypes from 'prop-types';
import RDS from '../lib';

const { Card, goForward, updateContext, updateSettings } = RDS;

const Fragment = ({ dispatch, context }) => {
  const choices = {
    wait: {
      className: 'btn btn-link text-white',
      text: 'Wait',
      onClick: () => dispatch(goForward()),
    },
    turnOfTheLight: {
      className: 'btn btn-link text-white',
      text: 'Turn of the light',
      onClick: () => {
        dispatch(updateContext({ environment: { ...context.environment, isLightOn: false } }));
        dispatch(updateSettings({ darkMode: true }));
        dispatch(goForward());
      },
    },
  };

  return (
    <Card choices={choices} className="text-white bg-dark" id="choice1">
      <div className="card-body">
        <h5 className="card-title">It's time to choose !</h5>
        <p className="card-text">
          Proin rhoncus libero vitae euismod ultrices.
          Aenean massa ipsum, cursus vehicula laoreet nec, blandit eu velit.
          Mauris et lobortis est. Duis justo leo, hendrerit vel molestie in, posuere quis mauris.
          Proin imperdiet eget massa ut pulvinar. Nulla at ligula sit amet urna pretium commodo.
          Sed congue lobortis nisi at posuere. Fusce sollicitudin nec felis at feugiat.
          Sed accumsan id ante ut pharetra. In hac habitasse platea dictumst.
        </p>
      </div>
    </Card>
  );
};

Fragment.propTypes = {
  dispatch: PropTypes.func.isRequired,
  context: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Fragment;
