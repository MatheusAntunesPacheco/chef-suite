import axios from 'axios'

const api = axios.create({
    baseURL: 'https://localhost5050' // TODO include on config file
})

class BffService {
    async getTableList(){
        try{
            // const response = await api.get('/tables');
            // return response.data;
            return [
                { id: '1', size: '4'},
                { id: '2', size: '2'},
                { id: '3', size: '6'},
                { id: '4', size: '4'},
                { id: '5', size: '6'},
                { id: '6', size: '10'},
                { id: '7', size: '4'},
                { id: '8', size: '4'},
                { id: '9', size: '4'},
                { id: '10', size: '2'}
            ];
        }
        catch(error){
            console.error('Erro ao buscar dados da API:', error);
            throw error;
        }
    }
}

export default new BffService();