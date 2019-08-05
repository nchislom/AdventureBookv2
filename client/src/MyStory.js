import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import RDS from './lib';

import Intro from './fragments/Intro';
import Choice1 from './fragments/Choice1';

import initialContext from './context';
import banner from './assets/image/logo.png';

const {
  Card,
  Debug,
  DebugButton,
  ErrorBoundary,
  getSchema,
  GoBackward,
  Header,
  resetStory,
  setContext,
  Story,
} = RDS;

const Content = props => (
  <>
    <Header
      className="border-0 bg-transparent"
      banner={{ src: banner, alt: 'React Dynamic Story Banner' }}
    />
    {Intro(props)}
    {Choice1(props)}
    <Card
      className="text-center"
      text="End"
      onClick={() => props.dispatch(resetStory())}
      title="End"
      category="End"
      comment="This is End"
      tags={['end', 'game over']}
    />
  </>
);

Content.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const MyStory = (props) => {
  const { context, dispatch, settings } = props;
  const { darkMode, debug } = settings;
  const schema = getSchema(Content(props));

  React.useEffect(() => { if (!context) dispatch(setContext(initialContext)); }, [context]);

  return context && (
    <>
      <ErrorBoundary>
        {React.createElement(
          debug ? Debug : Story,
          { id: 'myStory', className: classNames('styled', { 'bg-darker': darkMode }) },
          Content({ ...props, schema }),
        )}
      </ErrorBoundary>
      {(!debug && process.env.NODE_ENV === 'development') && (
        <div className="fixed-top m-2 text-right">
          <GoBackward className={classNames('btn-sm mr-2', { 'btn-dark': darkMode, 'btn-light': !darkMode })} />
          <DebugButton className={classNames('btn-sm mr-2', { 'btn-dark': darkMode, 'btn-light': !darkMode })} />
        </div>
      )}
    </>
  );
};

MyStory.propTypes = {
  dispatch: PropTypes.func.isRequired,
  context: PropTypes.objectOf(PropTypes.any),
  settings: PropTypes.shape({ debug: PropTypes.bool }),
};

MyStory.defaultProps = {
  context: null,
  settings: {},
};

export default connect(state => ({ ...state.dynamicStory }))(MyStory);
