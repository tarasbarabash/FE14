const detectTheme = () => {
  const mode = localStorage.getItem("mode");
  let isMediaDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  let selectedDark;
  if (mode) {
    let { dark } = JSON.parse(mode);
    selectedDark = dark;
  }
  if (
    (isMediaDark && selectedDark) ||
    (isMediaDark && selectedDark == undefined) ||
    (selectedDark && !isMediaDark)
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
    document.querySelector("#mode").className = "mode light";
  }
};

const onToggleClick = () => {
  const modeToggle = document.querySelector("#mode");
  modeToggle.addEventListener("click", toggleTheme);
};

const toggleTheme = () => {
  const theme = document.documentElement.getAttribute("data-theme");
  const mode = document.querySelector("#mode");

  if (theme) {
    document.documentElement.removeAttribute("data-theme");
    mode.className = "mode dark";
    localStorage.setItem("mode", JSON.stringify({ dark: false }));
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    mode.className = "mode light";
    localStorage.setItem("mode", JSON.stringify({ dark: true }));
  }
};

detectTheme();
onToggleClick();
