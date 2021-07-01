
export {dropDown};

function dropDown() {
  let drop = document.getElementsByClassName("drop__button");

  for (var i = 0; i < drop.length; i++) {
  drop[i].onclick = function() {
    this.classList.toggle('active');

    let content = this.nextElementSibling
    console.log(content, "sibling")
    console.log("Created content")
    if (content.style.maxHeight) {
      // accordion is currently open, so close it

      content.style.maxHeight = null;
      console.log('content at 0 max height')
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
      console.log('content is expanded')
    }
  }
}
}

