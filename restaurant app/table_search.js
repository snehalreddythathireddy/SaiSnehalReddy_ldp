tableSearch.addEventListener("input", function () {
    const searchText = this.value.toLowerCase().trim();

    tables.forEach(table => {
        const tableName = table.dataset.name.toLowerCase();

        if (tableName.includes(searchText)) {
            table.style.display = "";
        } else {
            table.style.display = "none";
        }
    });
});