import { SET_CURRENT_USER, LOG_OUT_USER } from '../actions/types';
import { setAuthorizationToken } from '../actions/sign_in';

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: {}
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        // turn an empty object into false or an object with keys to be true
        isAuthenticated: !!(Object.keys(action.user.id).length),
        user: action.user
      };
    case LOG_OUT_USER:
      return {
        isAuthenticated: false,
        user: {}
      };
    default:
      let token = sessionStorage.getItem('api-token');
      let user = sessionStorage.getItem('user');
      if (!token || token === '' || !user || user === '')
        return state;
      else {
        setAuthorizationToken(token);
        let user = JSON.parse(sessionStorage.getItem('user'));
        console.log("User:" + user.name);
        return {
          isAuthenticated: true,
          user: user
        };
      }

  }
}

// export default function(state={}, action) {
//   switch(action.type) {
//     case AUTHENTICATED:
//       return { ...state, authenticated: true };
//     case UNAUTHENTICATED:
//       return { ...state, authenticated: false };
//     case AUTHENTICATION_ERROR:
//       return { ...state, error: action.payload };
//     default:
//       return state;
//   }
// }