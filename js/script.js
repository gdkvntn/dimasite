(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  };
})();

$(document).ready(function () {
  $(".blogers__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    prevArrow:
      "<div class='control-c prev slick-prev'><img class='a-left' src='img/right.png'><div>",
    nextArrow:
      "<div class='control-c next slick-next'><img class='a-right' src='img/right.png'>",
    asNavFor: ".blogers__slidbar",
  });
  $(".blogers__slidbar").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".blogers__slider",
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
  });
});

$(document).ready(function () {
  $(".js-scroll").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке

    event.preventDefault();

    //забираем идентификатор бока с атрибута href

    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь

      top = $(id).offset().top - 150;

    //анимируем переход на расстояние - top за 1500 мс

    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

$(".scrollLink a").on("click", function () {
  let href = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(href).offset().top - 400,
    },
    {
      duration: 1500, // по умолчанию «400»
      easing: "swing", // по умолчанию «swing»
    }
  );
});

//animate scroll

let animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        scrollY > animItemOffset - animItemPoint &&
        scrollY < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  animOnScroll();
}

//Burger

(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__menu");
  const menuClose = document.querySelector(".header__nav-close");
  const menuLink = document.querySelectorAll(".header__link");
  const toLink = document.querySelector(".scrollLink");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav-active");
  });

  menuClose.addEventListener("click", () => {
    menu.classList.remove("header__nav-active");
  });
  if (window.innerWidth < 768) {
    for (let i = 0; i < menuLink.length; i++) {
      menuLink[i].addEventListener("click", () => {
        menu.classList.remove("header__nav-active");
      });
    }
  }
})();

//form

const form = document.querySelector("form");

form.addEventListener("submit", sendForm);

async function sendForm(e) {
  e.preventDefault();
  let formData = new FormData(form);
  let response = await fetch("sendmail.php", {
    method: "POST",
    body: formData,
  });
  if (response.ok) {
    let result = await response.json();
    alert(result.message);
    form.reset();
  } else {
    alert("error");
  }
}

// modal
const modal = document.getElementById("see-modal");
const body = document.querySelector("body");
const btn = document.getElementById("see-btn");

const span = document.getElementsByClassName("see-close")[0];

btn.onclick = function () {
  modal.style.visibility = "visible";
  modal.style.opacity = 1;
  body.style.overflow = "hidden";
};

span.onclick = function () {
  modal.style.visibility = "hidden";
  modal.style.opacity = 0;
  body.style.overflow = "auto";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.visibility = "hidden";
    modal.style.opacity = 0;
    body.style.overflow = "auto";
  }
};
