const storagePrefix = "pref_";

const storage = {
  getToken: () => {
    let _token = window.localStorage.getItem(`${storagePrefix}token`);
    if (_token && _token !== '' && _token !== 'undefined') {
      return JSON.parse(_token);
    } else {
      return null;
    }
  },
  setToken: (token) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
};

export default storage;
