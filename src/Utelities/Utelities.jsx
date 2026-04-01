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

const removeDataFormLocalStorage = (id) => {
    console.log(id)
    const localData = getDataFormLocalStorage()
    const finalData = localData.filter(ar => ar!==id)
    localStorage.setItem('appointment',JSON.stringify(finalData))
}

export {getDataFormLocalStorage, setDataFormLocalStorage , removeDataFormLocalStorage}