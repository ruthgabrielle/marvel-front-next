import axios from 'axios'

const timeStamp = '1633444430'
const apiKey = 'dd27a9c5b41ec2450d5e2e2a4f418b8f'
const md5Hash = 'ffeaa78a78918f4012447b36ad99bc7d'

const api = axios.create({
    baseURL: ` http://gateway.marvel.com/v1/public/movies?ts=${timeStamp}&apikey=${apiKey}&hash=${md5Hash}`,
})

export default api