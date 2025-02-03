const container = document.querySelector(".container");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showlist(data));

function showlist(categories) {
  console.log(categories);
  let markup = categories
    .map((category) => {
      return `<a href="produktliste.html?category=${category.category}">
                <div class="box1">
                    <div class="text1">${category.category}</div>
                </div>
            </a>`;
    })
    .join("");

  container.innerHTML = markup;
}
