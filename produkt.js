const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const productId = urlParams.get("product_id");

console.log("product_id", productId);

let productcontainer = document.querySelector(".container3");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productcontainer.innerHTML = `
     
    
     <div class="box3">

                <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="tshirt">
                
 <div class="${data.soldout && "soldout"} ${!data.soldout && "hide"}"">  
SOLD OUT
 </div>
            </div>

            <div class="box3">
                <h1 class="box3h1"> Product Information</h1>

                <h2> model name</h2>
                <h3> ${data.productdisplayname} </h3>

                <h2> Gender</h2>
                <h3> ${data.gender}</h3>

                 <h2> category</h2>
                <h3> ${data.category}</h3>

                <h2> invatory number</h2>
                <h3>${data.id}</h3>


                <h2 class="logo"> ${data.brandname}</h2>
                <h4> ${data.brandname}, creating experiences for todays athlete</h4>

            </div>

            <div class="box3">

                <h2 class="stortext">
                   ${data.productdisplayname}
                </h2>

                <h3 class="sidsteh3"> ${data.brandname} ${data.articletype}</h3>


                    
                    <div class="pris">
                        <h3 class="pris_tilbude"> DKK ${data.price}</h3>
                        <div class="${data.discount && "tilbud"} ${!data.discount && "hide"}">
                            <h3> ${data.discount}%</h3>
                                                    <h3> now DKK${data.price - (data.price * data.discount) / 100}</h3>
                        </div>

                        

                    </div>


                <h3 class="size"> Choosing size</h3>

                <div class="size-selector">
                    <label for="size">Choose a size:</label>
                    <select id="size">
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                    </select>
                </div>


                <button class="add-to-basket">Add to Basket</button>


            </div>

     
     `;
  });
