const openTab = (evt, piece, tabName) => {
   var content, links;

   content = document.getElementsByClassName(`${piece}-content`);

   for (var i = 0; i < content.length; i++) {
      content[i].style.display = "none";
   }

   links = document.getElementsByClassName(`${piece}-tab-link`);
   for (var i = 0; i < links.length; i++) {
      links[i].className = links[i].className.replace(" active", "");
   }

   document.getElementById(`${piece}-${tabName}`).style.display = "block";
   evt.currentTarget.className += " active";
};
