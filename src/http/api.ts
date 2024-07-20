import axios from "axios";
import {ICar} from "../models/Car";

export const Api = {
    getAllCars: async () => {
        return await axios.get<ICar>("https://test.tspb.su/test-task/vehicles");
    }
}
