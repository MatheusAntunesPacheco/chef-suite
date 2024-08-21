import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080' // TODO include on config file
})

class BffService {
    async getTableList(){
        try{
            
            const response = await api.get('/tables');
            return response.data
        }
        catch(error){
            console.error('Erro ao buscar dados da API:', error);
            throw error;
        }
    }
}

export default new BffService();