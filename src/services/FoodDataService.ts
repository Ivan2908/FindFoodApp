import http from '../http-common';

class FoodDataService {
  getAllRestaurants() {
    return http.get('restaurants');
  }
  getAllCousinTypes() {
    return http.get('cousinTypes');
  }
}

export default new FoodDataService();
