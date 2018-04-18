import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import { message } from 'antd';

const GET_CONFERENCE_SUCCESS = 'modules/Conference/GET_CONFERENCE_SUCCESS';

const initialState = fromJS({
  conference: {},
});

const reducer = handleActions({
  [GET_CONFERENCE_SUCCESS]: (state, action) => state.set('conference', fromJS(action.payload.conference)),
}, initialState);

const getConferenceSuccess = createAction(GET_CONFERENCE_SUCCESS, (conference) => ({ conference }));

export const getConference = () => (dispatch, getState, api) => {
  api.get(`/conferences/${process.env.REACT_APP_CONFERENCE_ID}`)
    .then((response) => {
      dispatch(getConferenceSuccess(response.data));
    })
    .catch((err) => message.error(err.message, 5));
};

export default reducer;
