app.component('webpage-header-component', {

  template:
  /*html*/
  `<div class="header">

      <div class="header-item">
        <h1 
        style=
        "text-align: left;
        margin: 0;
        padding: 15px;
        font-family: 'Medieval';">BookWyrm</h1>
      </div>
      
      <div class="header-item">
        <button class="header-btn">Home &#11033;</button>
      </div>
      
      <div class="header-item">
        <button class="header-btn">Books &#11033;</button>
      </div>

      <div class="header-item">
        <button class="header-btn">Help &#11033;</button>
      </div>

      <div class="header-item">
        <a href="http://127.0.0.1:5501/vue-libary-login.html">
          <button class="header-btn regis-btn">Log in</button>
        </a>
      </div>

      <div class="header-item">
        <button class="header-btn regis-btn">Sign up</button>
      </div>

  </div>`


})