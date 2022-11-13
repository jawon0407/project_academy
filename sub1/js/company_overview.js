function dongseungCompanyAni() {
  const dongseungCompany = document.querySelector(".dongseung_company");
  const dongseungProduct = document.querySelector(
    ".dongseung_company .logo_product"
  );
  const dongseungIntrotext = document.querySelector(
    ".dongseung_company .textbox"
  );
  if (dongseungCompany.getBoundingClientRect().top < 960) {
    dongseungProduct.classList.add("slideleft");
    dongseungIntrotext.classList.add("slideright");
  } else {
    dongseungProduct.classList.remove("slideleft");
    dongseungIntrotext.classList.remove("slideright");
  }
}

function seyangCompanyAni() {
  const seyangCompany = document.querySelector(".seyang_company");
  const seyangProduct = document.querySelector(".seyang_company .logo_product");
  const seyangIntrotext = document.querySelector(".seyang_company .textbox");
  if (seyangCompany.getBoundingClientRect().top < 960) {
    seyangProduct.classList.add("slideleft");
    seyangIntrotext.classList.add("slideright");
  } else {
    seyangProduct.classList.remove("slideleft");
    seyangIntrotext.classList.remove("slideright");
  }
}

window.addEventListener("scroll", dongseungCompanyAni);
window.addEventListener("scroll", seyangCompanyAni);
