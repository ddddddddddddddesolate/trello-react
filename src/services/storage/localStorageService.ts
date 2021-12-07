const localStorageService = {
  getItem: (key: string): any => {
    const item = localStorage.getItem(key);

    if (item === null) return;

    return JSON.parse(item);
  },
  setItem: (key: string, value: any): void => {
    return localStorage.setItem(key, JSON.stringify(value));
  }

};

export default localStorageService;
