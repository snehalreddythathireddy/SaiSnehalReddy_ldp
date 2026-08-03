const tablesContainer = document.getElementById("tablesContainer");

tablesContainer.innerHTML = tableData.map(table => `
<div class="table-item" data-name="${table.name}">
    <h2>${table.name}</h2>

    <p class="details">
        Rs.<span class="total">0</span> |
        Total Items:
        <span class="count">0</span>
    </p>
</div>
`).join("");

const menuContainer = document.getElementById("menuContainer");

const courses = [...new Set(menuItems.map(item => item.course))];

let html = "";

courses.forEach(course => {

    html += `
        <div class="${course.toLowerCase().replace(/\s+/g, "-")}">
            <h3>${course}</h3>
    `;

    menuItems
        .filter(item => item.course === course)
        .forEach(item => {

            html += `
                <div class="items"
                    draggable="true"
                    data-name="${item.name}"
                    data-price="${item.price}"
                    data-course="${item.course}">

                    <h3>${item.name}</h3>
                    <p>Rs.${item.price}</p>

                </div>
            `;
        });

    html += `</div>`;

});

menuContainer.innerHTML = html;