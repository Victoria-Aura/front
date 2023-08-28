import axios from "axios";

export default class GameDisciplineService {
    static async getGameDiscipline() {
        const response = await axios.get('http://localhost:8000/api/game-discipline/', )
        return response
    }
}