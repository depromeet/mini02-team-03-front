class StorageManager {
  static setToken = ({ accessToken }) => {
    localStorage.setItem('accessToken', accessToken);
  }

  static getToken = () => (localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : null)

  static clearToken = () => {
    localStorage.removeItem('accessToken');
  }
}

export default StorageManager;
