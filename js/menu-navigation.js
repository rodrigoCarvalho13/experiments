function myFunction() {
    var topNav = document.getElementById("servicos");
    if (topNav.className === "servicos") {
      topNav.className += " responsive";
    } else {
      topNav.className = "header";
    }
  }