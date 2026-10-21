console.log("restaurant_menu.js loaded");

const breakfastMenu = ['Pancakes', 'Egg Benedict', 'Oatmeal']
const mainCourseMenu = ['Steak','Pasta', 'Burger', 'Salmon']
const dessertMenu = ['Cake','Ice Cream','Pudding', 'Fruit Salad']

const breakFeastMenuItemHTML = breakfastMenu.map((item, index) => 
    `<p>Item ${index + 1}: ${item}</p>`).join('');

document.getElementById('breakfastTotalItems').textContent =
 `Total Breakfast Items: ${breakfastMenu.length}`;
document.getElementById('breakfastMenuItems').innerHTML = breakFeastMenuItemHTML;


let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});

document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;


//Outros metodos de array

//Reduce
const orderPrice = [12.99, 15.99, 9.99, 8.99, 14.99];
const totalOrderValue = orderPrice.reduce((total,price) => 
total + price,0);
console.log(`Total Order Value: $${totalOrderValue.toFixed(2)}`);


//Filter
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Smartphone', price: 500 },
    { name: 'Tablet', price: 300 },
    { name: 'Monitor', price: 250 },
    { name: 'Keyboard', price: 50 },
];

function filterProductByPrice(){
    let filteredProducts = products.filter(products => products.price >300)
    return filteredProducts.map(products => products.name);

}
console.log('Products with price greater than 300:', filterProductByPrice());

//Find

const products2 = [
    { name: 'Laptop', price: 1000 },
    { name: 'Smartphone', price: 500 },
    { name: 'Tablet', price: 300 },
    { name: 'Monitor', price: 250 },
    { name: 'Keyboard', price: 50 },
];

const employees = [
    { id: 1, name: 'Alice', Eid: 'EMP001', 'Contact details': 'alice@example.com', Role: 'Manager', Designation: 'Project Manager', Experience: '5 years' },
    { id: 2, name: 'Bob', Eid: 'EMP002', 'Contact details': 'bob@example.com', Role: 'Engineer', Designation: 'Software Engineer', Experience: '3 years' },
    { id: 3, name: 'Charlie', Eid: 'EMP003', 'Contact details': 'charlie@example.com', Role: 'Analyst', Designation: 'Data Analyst', Experience: '2 years' }
];

const employee = employees.find((e) => e.id === 2);

console.log(`Details of the employee
    \nname: ${employee.name}
    \nEid: ${employee.Eid}
    \nContact details: ${employee['Contact details']}
    \nRole: ${employee.Role}
    \nDesignation: ${employee.Designation}
    \nExperience: ${employee.Experience}`);