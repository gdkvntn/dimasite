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
    arrows:window.innerWidth<690?false:true,
    fade: true,
    dots: true,
    prevArrow:
      "<div class='control-c prev slick-prev'><img class='a-left' src='img/right.png'><div>",
    nextArrow:
      "<div class='control-c next slick-next'><img class='a-right' src='img/right.png'>",
    
  });
});

;

$(document).ready(function () {
  $(".js-scroll").on("click", "a", function (event) {
    event.preventDefault();   
    var id = $(this).attr("href"),
      top = $(id).offset().top - 150;
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
      duration: 1500, 
      easing: "swing", 
    }
  );
});

let mask = document.querySelector('.mask')
window.addEventListener('load',()=>{
  mask.classList.add('hide')
})

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
const form = document.querySelector("#form");
const modalForm = document.querySelector(".form-modal");
let formModalText = document.querySelector(".form-modal_text");
const formModalClose = document.querySelector(".form-close");
const mail = document.querySelector(".user-mail");
const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function onEmail() {
  if (isEmailValid(mail.value)) {
    mail.style.borderColor = "green";
  } else {
    mail.style.borderColor = "red";
  }
}
function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}
mail.addEventListener("input", onEmail);

formModalClose.addEventListener("click", () => {
  modalForm.style.visibility = "hidden";
  modalForm.style.opacity = 0;
  body.style.overflow = "auto";
});
form.addEventListener("submit", formSend);
function formSend(e) {
  e.preventDefault();
  mask.classList.remove('hide')
  mask.style.background='#876ed779'
  
  let formData = new FormData(form);

  if (isEmailValid(mail.value)) {
    fetch(`${form.action}`, {
      method: "POST",
      body: formData,
    }).then((res) => {
      body.style.overflow = "hidden";
      mask.classList.add('hide')
      modalForm.style.visibility = "visible";
      modalForm.style.opacity = 1;
      
      if (res.ok) {
        formModalText.textContent =
          "Благодарим, отправка прошла успешно , с вами свяжуться в ближайшее время.";
          e.target.reset()
      } else {
        formModalText.textContent = "Простите, при отправке возникла ошибка.";
      }
    });
  } else {
    mask.classList.add('hide')
    modalForm.style.visibility = "visible";
    modalForm.style.opacity = 1;
    body.style.overflow = "hidden";
    formModalText.textContent = "Введите корректный E-MAIL.";
  }
}
// modal see
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
  if (event.target == modalForm) {
    modalForm.style.visibility = "hidden";
    modalForm.style.opacity = 0;
    body.style.overflow = "auto";
  }
};
