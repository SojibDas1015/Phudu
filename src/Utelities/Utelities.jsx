const getDataFormLocalStorage = () => {
    const localStorageData = localStorage.getItem('appointment');
    if(localStorageData)
    {
        return JSON.parse(localStorageData)
    }
    return []
}

const setDataFormLocalStorage = (id) => {
    const getDataFormLocal = getDataFormLocalStorage()
    getDataFormLocal.push(id)
    localStorage.setItem('appointment', JSON.stringify(getDataFormLocal))

}

export {getDataFormLocalStorage, setDataFormLocalStorage}