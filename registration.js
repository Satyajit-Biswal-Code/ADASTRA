const scriptURL =
  "https://script.google.com/macros/s/AKfycbyeLrWjbw9o4_dDWiU-fM4_b2HVt7EmHqILR6DdxzVBFxbPpiuQ12LNFbQeesDerFQW2g/exec";
const para = document.getElementById("p");
const form = document.forms["registration-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  para.style.display = "block";
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Thank you! Your Registration is Successfull"))
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
