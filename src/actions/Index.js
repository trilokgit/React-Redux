import axios from "axios";

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

const fetchDataRequest = () => {
    return {
      type: FETCH_DATA_REQUEST,
    };
  };
  
  const fetchDataSuccess = (data) => {
    return {
      type: FETCH_DATA_SUCCESS,
      payload: data,
    };
  };
  
  const fetchDataFailure = (error) => {
    return {
      type: FETCH_DATA_FAILURE,
      payload: error,
    };
  };
  
  // Thunk Action Creator
  export const fetchData = () => {
    return (dispatch) => {
      dispatch(fetchDataRequest());
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          const data = response.data;
          dispatch(fetchDataSuccess(data));
        })
        .catch(error => {
          dispatch(fetchDataFailure(error.message));
        });
    };
  };