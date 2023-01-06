import axios from 'axios';
export function apiGenerateImage(prompt: string) {
    return axios.post("/api/generateImage",
        { prompt })
}