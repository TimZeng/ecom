export const FETCH_USER = 'FETCH_USER';
export const FETCH_SURVEYS = 'FETCH_SURVEYS';

// api is the customized axios instance passed in by redux-thunk
export const fetchUser = () => async ( dispatch, getState, api ) => {
  const res = await api.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async ( dispatch, getState, api ) => {
  const res = await api.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async ( dispatch, getState, api ) => {
  const res = await api.post('/api/surveys', values);
  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurvey = () => async ( dispatch, getState, api ) => {
  const res = await api.get('/api/surveys');
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};