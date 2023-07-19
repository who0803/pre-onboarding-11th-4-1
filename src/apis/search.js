import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000'
});


export class SearchAPI {
  static #PATH_ISSUES = `/sick`;

  static async getSearchResult(targetValue) {
    const result = await axiosInstance.get(
      this.#PATH_ISSUES,
      {
        params: {
          sickNm_like: targetValue,
        },
      },
    );
    console.info("calling api")
    return result.data;
  }
}