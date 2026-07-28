const tableOrders = {
    "Table 1": [],
    "Table 2": [],
    "Table 3": []
};

const menuSearch = document.getElementById("menuSearch");
const tableSearch = document.getElementById("tableSearch");
const items = document.querySelectorAll(".items");
const tables = document.querySelectorAll(".table-item");
const sections = document.querySelectorAll(".starters, .main-course, .dessert");

menuSearch.addEventListener("input", function () {
    const searchText = this.value.toLowerCase().trim();

    items.forEach(item => {
        const name = item.dataset.name.toLowerCase();
        const course = item.dataset.course.toLowerCase();

        if (name.includes(searchText) || course.includes(searchText)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });

    sections.forEach(section => {
        const visibleItems = section.querySelectorAll('.items:not([style*="display: none"])');

        if (visibleItems.length === 0) {
            section.style.display = "none";
        } else {
            section.style.display = "";
        }
    });
});


const modal = document.getElementById("orderModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const orderBody = document.getElementById("orderBody");
const grandTotal = document.getElementById("grandTotal");

