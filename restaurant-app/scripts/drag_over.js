tables.forEach(table => {
    table.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    table.addEventListener("drop", function (e) {
        e.preventDefault();

        const droppedItem = JSON.parse(e.dataTransfer.getData("text/plain"));
        const tableName = this.dataset.name;

        const existingItem = tableOrders[tableName].find(order => order.name === droppedItem.name);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            tableOrders[tableName].push({
                name: droppedItem.name,
                price: Number(droppedItem.price),
                quantity: 1
            });
        }

        const total = this.querySelector(".total");
        total.textContent = Number(total.textContent) + Number(droppedItem.price);

        const count = this.querySelector(".count");
        count.textContent = Number(count.textContent) + 1;

        console.log(tableOrders);
    });
});