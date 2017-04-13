let hideShow = () => {
  let nav = document.querySelector("#nav-id");
  if (nav.className === "nav-container") {
    nav.className += "nav-container hide";
  } else {
    nav.className = "nav-container";
  }
}

export default hideShow
