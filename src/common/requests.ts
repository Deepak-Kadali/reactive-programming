import axios from "axios";

export const fetchData = async () => {
    try {
        const response = await axios.get('https://catfact.ninja/fact')
        // console.log(response)
        return response.data.fact
    } catch (error: any) {
        console.log(error.response, 'error in request')
        return error.response
    }
};