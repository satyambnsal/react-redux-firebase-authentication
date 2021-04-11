const fakeAuth = {
  login() {
    localStorage.setItem("isUserLoggedIn", true);
  },
  logout() {
    localStorage.setItem("isUserLoggedIn", false);
  },
  isUserLoggedIn() {
    return localStorage.getItem("isUserLoggedIn");
  }
};

export default fakeAuth;
