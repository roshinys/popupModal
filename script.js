const text = "Welcome to my web!!!<3";

let index = 0;

var writeText = () => {
  document.body.innerText = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 0;
  }
};

setInterval(writeText, 100);
