const buttons = document.querySelectorAll(".filter-buttons button");
const items = document.querySelectorAll(".gallery .item");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    items.forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});
