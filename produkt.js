let productId = 1165;
let productcontainer = document.querySelector(".container3");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productcontainer.innerHTML = `
     
     
     <div class="box3">

                <img src="1165.webp" alt="tshirt">

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

                <h3 class="sidsteh3">Pris: ${data.price}</h3>


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
