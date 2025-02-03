const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const category = urlParams.get("category");

console.log("category", category);

const container2 = document.querySelector(".container2");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}`)
  .then((response) => response.json())
  .then((data) => showlist(data));

function showlist(products) {
  let markup = "";
  products
    .map((product) => {
      markup += `<div class="box">
                <div>
                    <div class="imgt">
                        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="tshirt">
                    </div>
                </div>
                <div class="text2">
                    <div>
                        <h2>${product.displayname}</h2>
                    </div>

                    <div>
                        <p>tshirt Nike</p>
                    </div>

                    <div>
                        <h3>${product.price}</h3>
                    </div>
                </div>

                <div class="button-container">
                    <a href="produkt.html?product_id=${product.id}"" class="button">View Details</a>
                </div>

            </div>`;
    })

    .join("");

  container2.innerHTML = markup;
}
