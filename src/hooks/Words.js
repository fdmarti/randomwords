export const Words = () => {

    const getWord = async () => {
        try {
            const resp = await fetch('https://random-words-api.vercel.app/word')
            const dataDB = await resp.json()
            return dataDB
        } catch (error) {
            return{
                error:true,
                message : error
            }
        }
    }

    return {getWord}
}