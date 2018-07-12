import { GET_TWEET_LIST, TWEET_URL, TOKEN } from './types';
import axios from 'axios';




export default function getUserList() {
  return dispatch => {
    axios.get(USER_URL,
  { headers: {
    "api-token": TOKEN
  }})
      // axios.get(URL + '/tweet')
      .then(res => {
        console.log('User list ::', res.data);
        const people = res.data.map(user => {
          return user;
        });
        dispatch(getUserListAsync(people));
      });
  }
}

function getUserListAsync(people){
  return {
    type: GET_TWEET_LIST,
    payload: people
  };
}


