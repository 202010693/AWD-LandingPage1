function changeContent() {
    var newContent = "New Content";
    document.getElementById("container").innerHTML =
        `
        <div class="popupinfo">
        <div class="popupinfo-restaurant-image">
            <img src="./assets/images/ribeye.jpg" alt="Restaurant Image">
        </div>
        <div class="popupinfo-restaurant-info">
            <h1 class="title">Ribeye Steak</h1>
            <div class="info-columns">
                <div class="column">
                    <p>The rib steak or ribeye is a cut of beef from the rib section, one of the nine primal cuts, and is prized for its tenderness and flavor.</p>
                </div>
                <div class="column">
                    <p>The ribeye is a boneless cut taken from the rib section of beef cattle while the rib steak is a bone-in ribeye.</p>
                    <p>Price starts at ₱8988</p>
                </div>
            </div>
        </div>
    </div>
    
    
    `;
}

  function changeContent2() {
    var newContent = "New Content";
    document.getElementById("container").innerHTML = 
    `
    <div class="popupinfo">
    <div class="popupinfo-restaurant-image">
        <img src="./assets/images/tomahawk.jpg" alt="Restaurant Image">
    </div>
    <div class="popupinfo-restaurant-info">
        <h1 class="title">Tomahawk Steak</h1>
        <div class="info-columns">
            <div class="column">
                <p>The Tomahawk steak is truly categorized as a “Tomahawk Ribeye steak”, as it is a big, thick-cut Ribeye with a long bone still attached.</p>
            </div>
            <div class="column">
                <p>This gives the steak its signature flavor and unique look, which resembles a Native American Tomahawk Axe.</p>
                <p>Price starts at ₱13988.</p>
            </div>
        </div>
    </div>
</div>


`;
  }
  
function changeContent3() {
    var newContent = "New Content";
    document.getElementById("container").innerHTML = 
    `
    <div class="popupinfo">
    <div class="popupinfo-restaurant-image">
        <img src="./assets/images/sirloin.jpg" alt="Restaurant Image">
    </div>
    <div class="popupinfo-restaurant-info">
        <h1 class="header">Sirloin Steak</h1>
        <div class="info-columns">
            <div class="column">
                <p>The butt sirloin steak is taken from the bottom of the loin, a section that becomes firmer with use and results in a tougher cut.</p>
            </div>
            <div class="column">
                <p>The leanness of all sirloin selections imbues the meat with a less fatt</p>
                <p>Price starts at ₱6999.</p>
            </div>
        </div>
    </div>
</div>


`;
  }

  function changeContent4() {
    var newContent = "New Content";
    document.getElementById("container").innerHTML = 
    `
    <div class="popupinfo">
    <div class="popupinfo-restaurant-image">
        <img src="./assets/images/fillet.jpg" alt="Restaurant Image">
    </div>
    <div class="popupinfo-restaurant-info">
        <h1 class="title">Fillet Mignon</h1>
        <div class="info-columns">
            <div class="column">
                <p>filet mignon, a slice of beef cut from the small, narrow end of the tenderloin, generally the most expensive steak on the market.</p>
            </div>
            <div class="column">
                <p>Filet mignon often has a milder flavour than other cuts of meat and as such is often garnished with a sauce or wrapped with bacon.</p>
                <p>Price starts at ₱2888.</p>
            </div>
        </div>
    </div>
</div>


`;
  }


 
  function back() {
    document.getElementById("container").innerHTML = 
    `
        <div class="restaurant">
            <a onclick="changeContent()">
                <div class="restaurant-header">
                    <h3 class ="head">RIBEYE STEAK</h3>
                </div>
                <div class="restaurant-image" style="background-image: url('./assets/images/ribeye.jpg');"></div>
            </a>
        </div>
        <div class="restaurant">
            <a onclick="changeContent2()">
                <div class="restaurant-header">
                    <h3 class ="head">TOMAHAWK STEAK</h3>
                </div>
                <div class="restaurant-image" style="background-image: url('./assets/images/tomahawk.jpg');"></div>
            </a>
        </div>
        <div class="restaurant">
            <a onclick="changeContent()">
                <div class="restaurant-header">
                    <h3 class ="head">SIRLOIN STEAK</h3>
                </div>
                <div class="restaurant-image" style="background-image: url('./assets/images/sirloin.jpg');"></div>
            </a>
        </div>
        <div class="restaurant">
            <a onclick="changeContent()">
                <div class="restaurant-header">
                    <h3 class ="head">FILLET MIGNON</h3>
                </div>
                <div class="restaurant-image" style="background-image: url('./assets/images/fillet.jpg');"></div>
            </a>
        </div>
    `;
}
