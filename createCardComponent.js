export function createCardComponent(data) {
  const col = document.createElement("div");
  col.classList.add(
    "column",
    "is-three-quarters-mobile",
    "is-three-quarters-tablet",
    "is-three-quarters-desktop"
  );
  const card = document.createElement("div");
  card.classList.add("card", "m-2");
  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  const title = document.createElement("p");
  title.classList.add("title", "is-5", "has-text-centered");
  title.textContent = ``;

  const a = document.createElement("a");
  a.textContent = `${data.title}`;
  a.href = data.url;

  col.appendChild(card);

  card.appendChild(cardContent);

  cardContent.appendChild(title);
  title.appendChild(a);

  return col;
}
