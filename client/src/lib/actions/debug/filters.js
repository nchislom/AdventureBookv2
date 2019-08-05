export const RESET_DEBUG_FILTERS = 'RDS_RESET_DEBUG_FILTERS';
export const resetDebugFilters = () => ({ type: RESET_DEBUG_FILTERS });

export const SET_DEBUG_FILTERS = 'RDS_SET_DEBUG_FILTERS';
export const setDebugFilters = debugFilters => ({ type: SET_DEBUG_FILTERS, debugFilters });

export const UPDATE_DEBUG_FILTERS = 'RDS_UPDATE_DEBUG_FILTERS';
export const updateDebugFilters = debugFilters => ({ type: UPDATE_DEBUG_FILTERS, debugFilters });
