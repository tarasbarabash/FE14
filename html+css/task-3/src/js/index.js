import "./theme";

const showTemplateBtn = document.querySelector("#showTemplate");

showTemplateBtn.addEventListener("click", () => {
  const template = document.querySelector("template");
  document
    .querySelector("#template")
    .appendChild(template.content.cloneNode(true));
  showTemplateBtn.disabled = true;
});

document.querySelector("#confirm").addEventListener("click", () => {
  document.querySelector("form").submit();
});
document
  .querySelector("#deny")
  .addEventListener(
    "click",
    () => (document.querySelector("dialog").classList = "dialog_hidden")
  );

document.querySelector("#send-feedback").addEventListener("click", e => {
  if (!document.querySelector("form").checkValidity()) return false;
  e.preventDefault();
  document.querySelector("dialog").classList = "dialog_visible";
});

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.fillRect(20, 20, 20, 20);
