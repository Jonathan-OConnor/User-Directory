import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomEmployees: function () {
    const config = {
      url: 'https://randomuser.me/api/?results=200',
      dataType: 'json',
      success: function (data) {
        console.log(data);
      }
    }
    return axios(config);
  },
};
