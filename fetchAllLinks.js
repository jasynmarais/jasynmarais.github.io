import resourceUrl from "./resourceUrl.js";
import { addLinkCard } from "./addLinkCard.js";

const fetchAllLinks = axios
  .get(resourceUrl)
  .then((response) => {
    // console.log(response);
    let articles = response.data;
    articles.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    // console.log(articles);
    articles.forEach((article) => {
      addLinkCard(article);
    });
  })
  .catch((error) => {
    console.log(error);
  });

export default fetchAllLinks;
