function updateTable(tableName) {
    const table = document.querySelector(`.table-item[data-name="${tableName}"]`);

    let total = 0;
    let count = 0;

    tableOrders[tableName].forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;
    });

    table.querySelector(".total").textContent = total;
    table.querySelector(".count").textContent = count;

    if (modal.style.display === "block" && modalTitle.textContent.startsWith(tableName)) {
        grandTotal.textContent = total;
    }
}

tables.forEach(table => {
    table.addEventListener("click", function () {
        showTableOrder(this.dataset.name);
    });
});

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
