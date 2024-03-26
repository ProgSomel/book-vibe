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

export {getStoredBook, saveBookToStorage}