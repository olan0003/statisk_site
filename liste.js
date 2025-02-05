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

 <div class="${product.soldout && "soldout"} ${!product.soldout && "hide"}"">  
SOLD OUT
 </div>

                </div>
                <div class="text2">
                    <div>
                        <h2>${product.displayname}</h2>
                    </div>

                    <div>
                        <p>tshirt Nike</p>
                    </div>

                   <div class="pris">
                        <h3 class="pris_tilbude">DDK ${product.price}</h3>
                        <div class="${product.discount && "tilbud"} ${!product.discount && "hide"}">
                            <h3> ${product.discount}% </h3>
                                                    <h3> now ${product.price - (product.price * product.discount) / 100}</h3>
                        </div>

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
