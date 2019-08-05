import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import readingTime from 'reading-time';

import RDS from '../lib';

const { Card, goForward, goTo } = RDS;

const Fragment = ({ dispatch, schema = [] }) => (
  <>
    <Card
      isSkipAble
      onTimeout={() => dispatch(goForward())}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum et sem ac porttitor.
      Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et augue sem. Duis ultricies mattis odio,
      id pretium magna vulputate quis. Phasellus a ornare sapien.
      Proin nec lorem rutrum, convallis elit ut, placerat tortor.
      Praesent maximus felis quis augue ultrices volutpat ac sed purus."
      timeout={({ text }) => readingTime(text).time}
    />
    <Card
      isSkipAble
      onTimeout={() => dispatch(goForward())}
      text="Donec viverra hendrerit velit eu condimentum. Proin ligula urna, commodo ut augue eu,
      eleifend posuere ipsum. Nunc egestas imperdiet tellus, eget egestas diam pharetra ac."
      timeout={({ text }) => readingTime(text).time}
    />
    <Card
      className="w-33 mr-lg-3"
      isSkipAble
      onTimeout={() => dispatch(goForward())}
      style={{ minHeight: '256px' }}
      text="Proin venenatis eu nibh ut consequat. Maecenas odio tellus, ullamcorper quis lacus non,
      laoreet lobortis arcu. Mauris bibendum purus sit amet pulvinar lacinia."
      timeout={({ text }) => readingTime(text).time}
    />
    <Card
      className="w-33"
      isSkipAble
      onTimeout={() => dispatch(goForward())}
      style={{ minHeight: '256px' }}
      text="Nullam ac lorem quis mauris consequat faucibus vitae at eros. Sed laoreet arcu id mi ultrices,
      in placerat nulla pulvinar. Nam rhoncus scelerisque metus."
      timeout={({ text }) => readingTime(text).time}
    />
    <Card
      className="w-33 ml-lg-3"
      isSkipAble
      onTimeout={({ index }) => dispatch(goTo(index, schema.indexOf('choice1')))}
      text="Donec in lacinia mi, eget lacinia diam. Integer dapibus erat orci, ut ornare velit dignissim eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      timeout={({ text }) => readingTime(text).time}
    />
  </>
);

Fragment.propTypes = {
  dispatch: PropTypes.func.isRequired,
  schema: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};

export default Fragment;
