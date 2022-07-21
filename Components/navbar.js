let navbar = () => {
  return `
    <div id="advertisement-div">
        <img src="./Images/homepage_ad.jpg" alt="advertisement.jpeg">
        <img src="./Images/playButton.png" alt="">
    </div>

    <div id="search-section">
        <img src="./Images/logo.png" alt="Beauty BEBO">
        <div>
            <select name="" id="">
                <option value="">All Brands</option>
                <option value="almay">Almay</option>
                <option value="alva">alva</option>
                <option value="anna sui">anna sui/option>
                <option value="annabelle">annabelle</option>
                <option value="l'oreal">l'oreal</option>
                <option value="nyx">nyx</option>
                <option value="physicians formula">physicians formula</option>
                <option value="salon perfect">salon perfect</option>
                <option value="piggy paint">piggy paint</option>
                <option value="wet n wild">wet n wild</option>
                <option value="zorah">zorah</option>
            </select>
            <input type="text" id="query" placeholder="Enter your Search">
            <button><img src="./Images/search.svg" alt="" id="search"></button>
        </div>
        <div>
            <img src="https://img.icons8.com/ios-glyphs/344/like--v1.png" id="wishlist" alt="Wishlist">
            <div id="account">
                <img src="https://img.icons8.com/ios-glyphs/344/user--v1.png" id alt="">
                <p>My Account</p>
            </div>
        </div>
    </div>

    <div id="categories-div">
        <h3 id="">Makeup</h3>
        <h3>skin</h3>
        <h3>hair</h3>
        <h3>personal care</h3>
        <h3>mom & baby care</h3>
        <h3>fragrance</h3>
        <h3>ayurveda</h3>
        <h3>brands</h3>
        <div id="magic" >
            <img src="./Images/shopping-bag.png" alt="">
            <h3 id="cart" >My cart</h3>

        </div>
    </div>
    
    <!-- Pop-up -->
    <div id="cart-popup">

        <div id="product">
          <div id="pic">
            <img id="image" src="https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/d/4/d4fb39c8904311904267__1_.jpg" alt="">
          </div>
          <div id="price">
            <div>Wow Onion Care Combo</div>
            <div>Qty:  <input id="box" type="text" inputmode="numeric"></div>
          </div>
        </div>
  
        <div id="total">
          <div>
            <div id="Subtotal">Cart Subtotal :</div> <div id = "pric">₹351.00 </div>
          </div>

          <div> 
            <button id="btn-1">View Cart</button>
            <button id="btn-2">Checkout</button>
          </div>
        </div>
      </div>
      `
}

export default navbar;
