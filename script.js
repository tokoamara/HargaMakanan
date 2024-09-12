// script.js

document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('search-box');
    const menuItems = document.querySelectorAll('.menu-item');

    searchBox.addEventListener('input', function() {
        const query = searchBox.value.toLowerCase();

        menuItems.forEach(item => {
            const productName = item.dataset.name.toLowerCase();
            if (productName.includes(query)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
