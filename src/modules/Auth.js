class Auth {
  // Saves a token via local storage if authenticated
  static authenticateUser(token) {
    localStorage.setItem('token',token);
  }

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
}

export default Auth;