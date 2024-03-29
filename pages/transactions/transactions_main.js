import { languageURLKey, userUnLoged } from "../../data/variables.js";

// IF UER NOT LOGET MOVE TO LOGIN

userUnLoged &&
  (location.href = `../login/login.html${languageURLKey}`);

const btn = document.getElementById("btnLogout");

btn.addEventListener("click", () => {
  localStorage.removeItem("userName");
  location.href = `../../index.html${languageURLKey}`;
});
