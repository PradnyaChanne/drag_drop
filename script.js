var draggedItem = null;
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    draggedItem = ev.target;
    ev.dataTransfer.setData("text", ev.target.id);
    ev.target.style.opacity = "0.4";
  }
  
  function drop(ev) {
    ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      var container2 = document.getElementById("container2");

      container2.appendChild(draggedItem);
      draggedItem.style.opacity = "1"; // Reset the appearance of the dragged item
      showSuccessMessage();

      setTimeout(function() {
        successMessage.style.display = "none";
      }, 1000);
  }
  function showSuccessMessage() {
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
    successMessage.innerHTML = "Item dropped successfully!";
  }


document.addEventListener('DOMContentLoaded', function() {
  var resetButton = document.getElementById('resetButton');
  var container1 = document.getElementById('container1');
  var container2 = document.getElementById('container2');

  // Store the original content and styles of containers
  var originalContent1 = container1.innerHTML;
  var originalStyle1 = container1.style.cssText;
  var originalContent2 = container2.innerHTML;
  var originalStyle2 = container2.style.cssText;

  resetButton.addEventListener('click', function() {
    // Restore the containers to their original state
    container1.innerHTML = originalContent1;
    container1.style.cssText = originalStyle1;
    container2.innerHTML = originalContent2;
    container2.style.cssText = originalStyle2;
  });
});






