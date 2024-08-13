import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5105' // TODO include on config file
})

class BffService {
    async getTableList(){
        try{
            
            const response = await axios.get('/tables');
            console.log(response.data);
            return response.data
        }
        catch(error){
            console.error('Erro ao buscar dados da API:', error);
            throw error;
        }
    }
}

export default new BffService();