import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { getCircularReplacer } from '../../../helpers';

import './DebugContext.scss';

const DebugContext = ({ darkMode, context, isOpen, onClose, onSubmit }) => {
  const firstInputElement = React.useRef(React.createRef());
  const [isEditing, setEdition] = React.useState(false);
  const [content, setContent] = React.useState(JSON.stringify(context, getCircularReplacer(), 2));

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdition(false);
    if (onSubmit) onSubmit(JSON.parse(content));
  };

  const startEdit = () => {
    setEdition(true);
    firstInputElement.current.focus();
  };

  const cancelEdit = () => {
    setContent(JSON.stringify(context, getCircularReplacer(), 2));
    setEdition(false);
  };

  const fixBody = () => {
    const { classList } = document.querySelector('body');

    if (isOpen) {
      firstInputElement.current.focus();
      classList.add('modal-open');
      classList.add('pr-3');
    } else {
      classList.remove('modal-open');
      classList.remove('pr-3');
    }

    return () => {
      classList.remove('modal-open');
      classList.remove('pr-3');
    };
  };

  React.useEffect(fixBody, [isOpen]);

  const bgDark = darkMode && 'bg-dark';
  const textWhite = darkMode && 'text-white';

  return isOpen && (
    <>
      <div
        className="debug-context modal animated slideInDown fade show"
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className={classNames('modal-content', bgDark, textWhite)}>
            <div className="modal-header">
              <h5 className="modal-title">Context</h5>
              <button
                type="button"
                className="close text-danger"
                aria-label="Close"
                data-dismiss="modal"
                onClick={onClose}
                onKeyPress={onClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <label htmlFor="content" className="w-100">
                  Content
                  <textarea
                    className="form-control"
                    id="content"
                    name="content"
                    placeholder="{}"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    ref={firstInputElement}
                    disabled={!isEditing}
                    rows={10}
                  />
                </label>
              </form>
            </div>
            <div className="modal-footer">
              {isEditing ? (
                <>
                  <button
                    className={classNames('btn btn-link', textWhite)}
                    type="button"
                    onClick={cancelEdit}
                    onKeyPress={cancelEdit}
                  >
                    × Cancel edit
                  </button>
                  <button className="btn  btn-success" type="submit" onClick={handleSubmit} onKeyPress={handleSubmit}>
                    Apply changes
                  </button>
                </>
              ) : (
                <button className="btn btn-primary" type="button" onClick={startEdit} onKeyPress={startEdit}>
                  Edit context
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="debug-context modal-backdrop animated slideInDown fade show" />
    </>
  );
};

DebugContext.propTypes = {
  isOpen: PropTypes.bool,
  darkMode: PropTypes.bool,
  context: PropTypes.shape({
    text: PropTypes.string,
    index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    category: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    tagsUnion: PropTypes.bool,
    className: PropTypes.string,
    classNameUnion: PropTypes.bool,
    hasChoices: PropTypes.bool,
    isSkipAble: PropTypes.bool,
    hasCustomStyle: PropTypes.bool,
  }).isRequired,
  onClose: PropTypes.func,
};

DebugContext.defaultProps = {
  darkMode: false,
  isOpen: false,
  onClose: () => false,
};

export default connect(({ dynamicStory }) => ({
  darkMode: dynamicStory.settings.darkMode,
  context: dynamicStory.context,
}), () => ({}))(DebugContext);
