function myFunction() {
    var x = document.getElementById("nav");
    var y = document.getElementById("header");
    if (x.style.display === "flex") {
      x.style.display = "none";
      y.style.height = "7rem";
    } else {
      x.style.display = "flex";
      y.style.height = "100vh";
      
    }
  }