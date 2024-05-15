export const updateLocalStorage = (key: string, newValue: string) => {
    localStorage.setItem(key, newValue);
};

export const getFromLocalStorage = (key: string) => {
    return localStorage.getItem(key) || '';
};