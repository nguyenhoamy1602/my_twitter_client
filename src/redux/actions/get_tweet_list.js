import { GET_TWEET_LIST, TWEET_URL } from './types';
import axios from 'axios';




export default function getTweetList() {
  return dispatch => {
    axios.get(TWEET_URL)
      // axios.get(URL + '/tweet')
      .then(res => {
        console.log('Tweet list ::', res.data);
        const people = res.data.map(tweet => {
          return tweet;
        });
        dispatch(getTweetListAsync(people));
      });
  }
}

function getTweetListAsync(people){
  return {
    type: GET_TWEET_LIST,
    payload: people
  };
}


