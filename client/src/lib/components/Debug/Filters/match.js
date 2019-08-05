export const initialDebugFiltersState = {
  text: '',
  index: '',
  className: '',
  category: '',
  tags: [],
  hasChoices: false,
  isSkipAble: false,
  hasCustomStyle: false,
};

export const filtersEqualsInitialState = filters => Object.keys(initialDebugFiltersState).every((filter) => {
  const search = filters[filter];
  return filter === 'tags' ? search.length === 0 : filters[filter] === initialDebugFiltersState[filter];
});

export const filterElements = (elements, filters = {}) => {
  if (filtersEqualsInitialState(filters)) return elements;

  const matchWith = {
    text: matchWithText,
    index: matchWithIndex,
    category: matchWithCategory,
    tags: matchWithTags,
    className: matchWithClassName,
    hasChoices: matchWithHasChoices,
    isSkipAble: matchWithIsSkipAble,
    hasCustomStyle: matchWithHasCustomStyle,
  };

  return elements.filter(element => Object.keys(matchWith).some((filter) => {
    const search = filters[filter];
    return matchWith[filter](element, search, filters);
  }));
};

export const findElementById = (elements, id) => elements.find(element => matchWithId(element, id));

export function matchWithText(element, search = '') {
  if (search === '') return false;

  const { title = '', comment = '', text = '', id = '' } = element.props;
  return (title + comment + text + id).includes(search);
}

export function matchWithId(element, search) {
  const { id } = element.props;

  if (!id || search === '') return false;

  return id === search;
}

export function matchWithIndex(element, search = '') {
  const { index } = element.props;

  if (search === '') return false;

  return parseInt(index, 10) === parseInt(search, 10);
}

export function matchWithCategory(element, search = '') {
  const { category } = element.props;

  if (!category || search === '') return false;

  return category === search;
}

export function matchWithTags(element, search = [], filters) {
  if (search.length < 1) return false;

  const { tags = [] } = element.props;
  let match = false;

  if (filters.tagsUnion) {
    match = search.every(tag => tags.includes(tag));
  } else {
    match = search.some(tag => tags.includes(tag));
  }

  return match;
}

export function matchWithClassName(element, search = '', filters) {
  if (search === '') return false;

  const { className = '' } = element.props;
  const classes = className.split(' ');

  if (classes.length < 1) return false;

  let match = false;

  if (filters.classNameUnion) {
    match = search.split(' ').every(classname => classes.includes(classname));
  } else {
    match = search.split(' ').some(classname => classes.includes(classname));
  }

  return match;
}

export function matchWithHasChoices(element, search) {
  const { choices } = element.props;
  return search && choices && Object.keys(choices).length > 0;
}

export function matchWithIsSkipAble(element, search) {
  const { isSkipAble } = element.props;
  return search && !!isSkipAble;
}

export function matchWithHasCustomStyle(element, search) {
  const { style } = element.props;
  return search && style && Object.keys(style).length > 0;
}
