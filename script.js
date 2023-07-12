function handleNavigation(element) {
    var navigationItems = document.querySelectorAll("nav ul li a");
    navigationItems.forEach(function(item) {
      item.classList.remove("active");
    });
    element.classList.add("active");
  }
  
  function handleUpvote(element) {
    var upvotes = parseInt(element.innerText);
    upvotes++;
    element.innerText = upvotes + " upvotes";
  }
  
  function handleComments(element) {
    var comments = parseInt(element.innerText);
    comments++;
    element.innerText = comments + " comments";
  }
  