import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
})

class BffService {
    async getTableList(){
        try{
            console.log('AlÁ: ' + process.env.REACT_APP_SERVER_URL);
            const response = await api.get('/tables');
            return response.data
        }
        catch(error){
            console.error('Erro ao buscar dados da API:', error);
            throw error;
        }
    }
}

const bffServiceInstance = new BffService();
export default bffServiceInstance;