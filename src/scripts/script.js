let hideShow = () => {
  let nav = document.querySelector("#nav-id");
  console.log(nav.className)
  if(nav.className === "nav-items hide") {
    nav.className = "nav-items"
  } else {
    nav.className = "nav-items hide"
  }
}

export default hideShow;
