function showTableOrder(tableName) {
    modalTitle.textContent = tableName + " Order Details";
    orderBody.innerHTML = "";

    let total = 0;

    tableOrders[tableName].forEach((item, index) => {
        total += item.price * item.quantity;

        orderBody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td>
                <button class="qty-btn decrease" data-index="${index}">−</button>
                <span class="qty">${item.quantity}</span>
                <button class="qty-btn increase" data-index="${index}">+</button>
            </td>
            <td>
                <button class="delete-btn" data-index="${index}">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });

    grandTotal.textContent = total;
    modal.style.display = "block";

    document.querySelectorAll(".increase").forEach(button => {
        button.addEventListener("click", function () {
            const index = this.dataset.index;
            tableOrders[tableName][index].quantity++;
            updateTable(tableName);
            showTableOrder(tableName);
        });
    });

    document.querySelectorAll(".decrease").forEach(button => {
        button.addEventListener("click", function () {
            const index = this.dataset.index;

            if (tableOrders[tableName][index].quantity > 1) {
                tableOrders[tableName][index].quantity--;
            } else {
                tableOrders[tableName].splice(index, 1);
            }

            updateTable(tableName);
            showTableOrder(tableName);
        });
    });

    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", function () {
            const index = this.dataset.index;
            tableOrders[tableName].splice(index, 1);
            updateTable(tableName);
            showTableOrder(tableName);
        });
    });
}