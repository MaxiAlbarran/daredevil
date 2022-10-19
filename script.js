const handleClick = () => {
    let x = document.getElementById("menu");
    if (x.className === "menu navbar") {
      x.className += " responsive";
    } else {
      x.className = "menu navbar";
    }
  };