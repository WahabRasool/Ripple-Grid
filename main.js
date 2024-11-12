const gridContainer = document.getElementById("grid-container");

const cells = document.querySelectorAll(".cell");

gridContainer.addEventListener("click", function (event) {
  const target = event.target;
  if (!target.classList.contains("cell")) return;

  const clickedRow = parseInt(target.dataset.row);
  const clickedCol = parseInt(target.dataset.col);

  cells.forEach(function (cell) {
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);

    const distance = Math.abs(row - clickedRow) + Math.abs(col - clickedCol);

    setTimeout(function () {
      cell.classList.add("pulse");

      setTimeout(function () {
        cell.classList.remove("pulse");
      }, 500); // Match this duration with the CSS animation duration
    }, distance * 100); // Adjust the multiplier to control ripple speed
  });
});
