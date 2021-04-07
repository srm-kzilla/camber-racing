const header = `<nav class="navbar navbar-expand-md navbar-light">
    <a class="navbar-brand" href="#" id="navbar-brand">
      <img src="res/img/logos/logo-without-bg.png"
        id="navbar-brand-img" />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="index.html"><span>Home</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./aboutus.html"><span>About Us</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html"><span>Partners</span></a>
        </li>
        <li class="nav-item dropdown show" >
          <a class="nav-link dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span>The Paddock</span></a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="cars.html?car=CR800">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
           </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="team.html"><span>Our Team</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact"><span>Contact Us</span></a>
        </li>
      </ul>
    </div>
  </nav>`;

const footer = `
  <footer class="camber-footer container-fluid" id="contact">
    <div class="row text-center mb-2">
      <div class="content col-md-3">
        <h5 class="ml-mr-auto">Camber Racing</h5>

        <img src="res/img/logos/logo-without-bg.png " />

        <div class="social-media-icon footer-nav-links">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>
        <div class="ml-mr-auto footer-newsletter-button">
          <div class=" px-2 py-2 ">
            <a href="#">
              <h6>Subscribe to our Newsletter! <i class="fas fa-play"></i></h6>
              </i>
            </a>
          </div>
        </div>


      </div>



      <div class="col-md-1"></div>





      <div class="footer-contact-us text-left  col-md-4">
        <h6 class="heading pl-3">Address</h6>
        <h6 class="pl-3">Camber Racing</h6>


        <div class="mb-3 pr-8 pl-3">
          <p>
            Department of Automobile Engineering SRM Institute of Science &
            Technology, Kattankulathur Tamil Nadu - 603203
          </p>
        </div>
        <h6 class="heading mb-3 pl-3">Contact Us</h6>
        <h6 class="pl-3">Kshitij Singh</h6>
        <div class="pl-3">
          <ul>
            <li>
              <a href="#"><i class="fas fa-envelope"><span>Mail: captain.camberracing@gmail.com </span></i></a>
            </li>
            <li>
              <a href="#"><i class="fas fa-phone"><span>Mob: +91 8318 7383 22</span></i></a>
            </li>
          </ul>
        </div>


      </div>

      <div class="input-section col-md-4 ">
        <h6 class="heading mb-3  pl-3">GET IN TOUCH</h6>

        <div>

          <input class="my-3 w-75 mx-2 py-1 pl-3 " type="text" placeholder="Name" />
          <input class="my-3 w-75 ml-2 py-1 pl-3" type="text" placeholder="Email Address" />
          <input class="my-3 w-75 ml-2 py-1 pl-3" type="text" placeholder="Company Name" />
          <input class="my-3 w-75 ml-2 py-4 pl-3 text-height-1" type="text" placeholder="Message" />
        </div>
        <div class="w-25 ml-2 footer-send-button">
          <div class=" px-2 py-2 align-items-center justify-content-center">
            <a href="#">
              <h6>Send</h6>
              </i>
            </a>
          </div>

        </div>

      </div>
    </div>

    <hr class="mx-5" />
    <div class="row hr-below mx-5">
      <div class="col-lg 8 col-md-7 col-sm-7 copyright">
        <small>&copy;Copyright Camber Racing SRMIST | 2020</small>
      </div>
      <div class="col-lg-4 col-md-5 col-sm-5 brand-mark">
        <small>Made with <span>&hearts;</span> from
          <a href= https://srmkzilla.net target=\"_blank\"><span>SRMKZILLA</span></a></small>
      </div>
    </div>

  </footer>`;

const headerEle = document.querySelector("header");
const footerEle = document.querySelector("footer");

headerEle.innerHTML = header;
footerEle.innerHTML = footer;
