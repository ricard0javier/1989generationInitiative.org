import axios from "axios";
import marked from "marked";

const API_ARTICLES_URL = "http://www.thecodestein.com/api/articles";

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export function receiveArticles(articles) {
  return {
    type: RECEIVE_ARTICLES,
    articles
  };
}

export const fetchArticles = () => dispatch => {
  axios
    .get(API_ARTICLES_URL)
    .then(response => {
      const articleRequestList = response.data.map(url => axios.get(url));
      axios.all(articleRequestList)
        .then(axios.spread((...articleResponseList) => {
          const articleContentList = articleResponseList.map(response => marked(response.data));
          dispatch(receiveArticles(articleContentList));
        }));
    });
};
