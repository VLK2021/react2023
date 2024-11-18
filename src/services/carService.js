import {apiService} from "./apiService";
import {urls} from "../constants";

const carService = {
    getAll: () => apiService.get(urls.cars.base),
    create: (data) => apiService.post(urls.cars.base, data),
    addPhoto: (id, photo) => apiService.put(urls.cars.photoById(id), photo)
}

export {
    carService
}