const generateBill = document.getElementById("generateBill");

generateBill.addEventListener("click", function () {
    const tableName = modalTitle.textContent.replace(" Order Details", "");

    if (tableOrders[tableName].length === 0) {
        alert("No items ordered.");
        return;
    }

    alert(`Total Bill : ₹${grandTotal.textContent}`);

    tableOrders[tableName] = [];
    updateTable(tableName);

    orderBody.innerHTML = "";
    grandTotal.textContent = "0";
    modal.style.display = "none";
});