let navbar = () => {
  return ` <div id="advertisement-div">
            <img src="./Images/homepage_ad.jpg" alt="advertisement.jpeg">
            <img src="./Images/playButton.png" alt="">
        </div>
    
        <div id="search-section">
            <a href="./index.html"><img src="./Images/logo.png" alt="Beauty BEBO"></a>
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
                <img src="./Images/wishlist.png" id="wishlist" alt="Wishlist">
                <div id="account">
                    <img src="./Images/user.png" id alt="">
                    <p> My Account</p>
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
            <h3 id = "brandspage">brands</h3>
            <div id="magic" >
                <img src="./Images/shopping-bag.png" alt="">
                <h3 id="cart" >My cart - ₹0.00</h3>
            </div>
        </div>
        
        <!-- Pop-up -->
        <div id="cart-popup">
    
            <div id="product">
              
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
          </div>`
}

export default navbar;
