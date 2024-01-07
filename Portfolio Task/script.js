

////////////////Slider component-- projects section //////////////////////

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();



//////////////// Sticky navigation ////////////////////////////////////////////

const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);


//////////////// Show scrollup button  /////////////////////////////////////////////////////
function scrollUpfunc() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 680) scrollUp.classList.remove("hide");
  else scrollUp.classList.add("hide");
}
window.addEventListener("scroll", scrollUpfunc);


//////////////// contact email sending ///////////////////////////////////////////////////////
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  if (params.name !== "" && params.email !== "" && params.message !== "") {

    //regular expression for email validation
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    //Invalid email
    if (!regex.test(params.email))
      alert("Please Enter a valid email address !");

    else {
      const serviceID = "service_yz5ghar";
      const templateID = "template_zb403l9";

      emailjs.send(serviceID, templateID, params)
        .then((res) => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("your message sent successfully !!");
        }
        )
        .catch((error) => console.log(error));
    }
  }
  else {
    alert("Please fill all the details !!");
  }
}


//////////////// SMOOTH scrolling ////////////////////////////////////////////////////////

document.querySelector(".main-nav-list ").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains('main-nav-link')) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
  //Closing mobile nav
  if (e.target.classList.contains("main-nav-link")) {
    document.querySelector(".header").classList.toggle("nav-open");
  }
});

document.querySelector(".footer-link ").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains('footer-link')) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
  //Closing mobile nav
  if (e.target.classList.contains("main-nav-link")) {
    document.querySelector(".header").classList.toggle("nav-open");
  }
});

//Smooth scrolling of scroll up button
const section = document.getElementById("home");
document.querySelector(".scrollup").addEventListener("click", function (e) {
  e.preventDefault();
  section.scrollIntoView({ behavior: "smooth" })
});

//smooth scrolling for logo
document.querySelector(".logo").addEventListener("click",function(e){
  e.preventDefault();
  section.scrollIntoView({behavior:"smooth"});
});


//////////////// Mobile Navigation //////////////////////////////////////////////////////////

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});


