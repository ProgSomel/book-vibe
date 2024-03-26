const getStoredBook = (cart) => {
    const valueFromStorage = localStorage.getItem(cart);
    if(valueFromStorage) {
        return JSON.parse(valueFromStorage);
    }
    return [];
}

const saveBookToStorage = (cart, id) => {
    const valueFromStorage = getStoredBook(cart);
    const exit = valueFromStorage.find(bookId=> bookId === id);
    if(!exit) {
        valueFromStorage.push(id);
        localStorage.setItem(cart, JSON.stringify(valueFromStorage));
        return true;
    }
    return
}

const removeFromStorage = (cart, id) => {
    const valueFromStorage = getStoredBook(cart);
    const updatedStorage = valueFromStorage.filter(bookId => bookId !== id);
    localStorage.setItem(cart, JSON.stringify(updatedStorage));
}

export {getStoredBook, saveBookToStorage, removeFromStorage}