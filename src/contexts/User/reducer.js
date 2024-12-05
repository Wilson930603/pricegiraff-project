function getLocalToken() {
  return localStorage.getItem('token') || '';
}

function getLocalUser() {
  let user = {};

  try {
    user = JSON.parse(localStorage.getItem('user'));
  } catch (err) {
    // do nothing
  }

  return user;
}

function setLocalUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

function setLocalToken(token) {
  localStorage.setItem('token', token);
}

function login(token, user) {
  setLocalToken(token);
  setLocalUser(user);
}

function logout() {
  setLocalToken('');
  setLocalUser({});
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      login(action.token, action.user);
      return {
        ...state,
        loggedIn: true,
        user: action.user,
        token: action.token
      };
    case 'LOGOUT':
      logout();
      return { ...state, loggedIn: false, user: {}, token: '' };
    default:
      return state;
  }
};

const token = getLocalToken();
const user = getLocalUser();
export const initialState = {
  user,
  token,
  loggedIn: !!token
};
