const controls = document.querySelectorAll(".control input");

function makeChange(){
  const suffix = this.dataset.sizing || "";

  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

controls.forEach(input => input.addEventListener("change", makeChange))
controls.forEach(input => input.addEventListener("mousemove", makeChange))
