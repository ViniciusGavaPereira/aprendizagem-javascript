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
