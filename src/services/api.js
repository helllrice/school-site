export const getNav = async () => {
    try {
        const URL = 'https://sitestestapi.experiment.school/pageRole/byDomain/localhost';
        const res = await fetch(URL);
        const data = await res.json();
        return data

    } catch (error) {
        console.error('error', error)
    }
}

export const getNews = async () => {
    try {
        const URL = 'https://sitestestapi.experiment.school/article/topNews';
        const res = await fetch(URL);
        const data = await res.json();
        return data

    } catch (error) {
        console.error('error', error)
    }
}


