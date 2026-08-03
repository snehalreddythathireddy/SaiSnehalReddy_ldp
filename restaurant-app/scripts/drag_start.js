items.forEach(item => {
    item.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData(
            "text/plain",
            JSON.stringify({
                name: this.dataset.name,
                price: this.dataset.price
            })
        );
    });
});
