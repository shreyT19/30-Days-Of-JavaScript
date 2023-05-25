const wrapper = document.querySelector(".wrapper");
const btn = document.querySelector(".btn");
console.log(wrapper);
const handleSetCookie = () => {
  // 60secs 60min 24hours 30days --> Expiry Of Cookie
  document.cookie = "CookieHasBeenSet; max-age=" + 60 * 60 * 24 * 30;
  //or
  // document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";

  if (document.cookie) {
    //if cookie set
    console.log(wrapper);
    wrapper.classList.add("hide");
    console.log("cookie set");
  } else {
    alert("Cookie couldn't be set");
    console.log("cookie could be set");
  }
};
let cookieExpiryCheck = document.cookie.indexOf("CookieHasBeenSet");
cookieExpiryCheck != -1
  ? wrapper.classList.add("hide")
  : wrapper.classList.remove("hide");

btn.addEventListener("click", handleSetCookie);
