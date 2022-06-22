import resourceUrl from "./resourceUrl.js";

import { createCardComponent } from "./createCardComponent.js";

const cardsContainer = document.querySelector(".columns");

export function addLinkCard(article) {
  axios
    .get(resourceUrl)
    .then((response) => {
      const newCard = createCardComponent(article);
      cardsContainer.appendChild(newCard);
    })
    .catch((error) => console.log(error));
}
