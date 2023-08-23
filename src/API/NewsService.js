import axios from "axios";

export default class NewsService {
    static async getNews(limit=4, page=1) {
        const response = await axios.get('http://localhost:8000/api/news/', )
        return response;
    }

}