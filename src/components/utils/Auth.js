class Auth {
  // Saves a token via local storage if authenticated
  static authenticateUser(token, id) {
    localStorage.setItem('token',token);
    localStorage.setItem('id', id)
  }
  // Checks if a token is stored in local storage
  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  // Deauthenticate user by removing token from local storage
  static deauthenticateUser() {
    localStorage.removeItem('token');
  }

  // Get a token value
  static getToken() {
    return localStorage.getItem('token');
  }

  // Get user data
  static getData() {
    return localStorage.getItem('data');
  }
}

export default Auth;