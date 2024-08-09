const panels = document.querySelectorAll(".panel");
console.log(panels);
console.log(panels[0]);

panels.forEach((panel) => {
  panel.addEventListener("mouseover", () => {
    // removeActiveClasses();
    panel.classList.add("active");
  });
  panel.addEventListener("mouseleave", () => removeActiveClasses());
});
1;

function removeActiveClasses() {
  panels.forEach((panel) => panel.classList.remove("active"));
}
