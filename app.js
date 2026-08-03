let orders = [];

function showPage(pageId){

    document.querySelectorAll("section").forEach(section=>{
        section.style.display="none";
    });

    document.getElementById(pageId).style.display="block";
}

function addOrder(){

    let customer = prompt("Customer Name");
    if(!customer) return;

    let product = prompt("Product Name");
    if(!product) return;

    let total = Number(prompt("Total Amount"));
    if(isNaN(total)) return;

    let status = prompt("Status (Pending / Delivered)");

    let order = {
        no: orders.length + 1,
        customer,
        product,
        total,
        status
    };

    orders.push(order);

    renderOrders();
    updateDashboard();
}

function renderOrders(){

    let table = document.getElementById("orderTable");
    table.innerHTML="";

    orders.forEach(order=>{

        table.innerHTML += `
        <tr>
            <td>${order.no}</td>
            <td>${order.customer}</td>
            <td>${order.product}</td>
            <td>Rs.${order.total}</td>
            <td>${order.status}</td>
        </tr>
        `;

    });

}

function updateDashboard(){

    document.getElementById("totalOrders").innerText = orders.length;

    let sales = 0;
    let pending = 0;
    let delivered = 0;

    orders.forEach(order=>{

        sales += order.total;

        if(order.status.toLowerCase()=="pending"){
            pending += order.total;
        }

        if(order.status.toLowerCase()=="delivered"){
            delivered++;
        }

    });

    document.getElementById("totalSales").innerText = sales;
    document.getElementById("pendingBalance").innerText = pending;
    document.getElementById("deliveredOrders").innerText = delivered;
}

updateDashboard();
