import axios from "axios";

export default class ImgService {
    static async getMainImg() {
        const response = await axios.get('http://localhost:8000/api/img/main/', )
        return response
    }
    
}