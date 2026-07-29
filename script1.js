// Example 6  (EVENT HANDLING IN DOM)

document.getElementById("clickmebutton").addEventListener("click", function () {
  alert("Connected");
});

// Example 7 (EVENT DELEGATION)

document.getElementById("tealist").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaitem")) {
    alert("You Selected : " + event.target.textContent);
  }
});

// Example 8  (FORM HANDLING)

document
  .getElementById("Feedbackform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("FeedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackdisplay").textContent =
      `The Feedback Is: ${feedback}`;
  });

// Example 9  (DOM CONTENT LOADED)

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

// Example 10  (CSS CLASSES MANIPULATION)

document
  .getElementById("togglehighlight")
  .addEventListener("click", function () {
    let Descriptiontext = document.getElementById("Descriptiontext");
    Descriptiontext.classList.toggle("Highlight");
  });
