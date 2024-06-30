type LKeys = "accessToken"

export const setToLocalStorage = (key: LKeys, value: string) => {
    if(typeof window !== "undefined") {
        return localStorage.setItem(key, value);
    } return false;
};

export const getFromLocalStorage = (key: LKeys) => {
    if(typeof window !== "undefined") {
        return localStorage.getItem(key);
    } return false;
}

export const clearLocalStorage = () => {
    if(typeof window !== "undefined") {
        return localStorage.clear();
    } return false;
}