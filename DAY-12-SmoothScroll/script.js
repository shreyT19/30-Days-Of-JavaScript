
//Smooth Scroll

const smoothScroll = (event) => {
    event.preventDefault();
    console.log(event);
    const href1 = middle.getAttribute("href");
    console.log(href1);

    const targetElement = document.querySelector(href1);
    
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    
  };
  

