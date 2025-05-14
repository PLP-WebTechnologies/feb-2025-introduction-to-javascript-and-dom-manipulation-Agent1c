// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
    const title = document.getElementById('main-title');
    title.textContent = 'Text Changed Dynamically!';
});

// Modify CSS styles via JavaScript
document.getElementById('change-text-btn').addEventListener('click', () => {
    const description = document.getElementById('description');
    description.style.color = 'blue';
    description.style.fontWeight = 'bold';
});

// Add or remove an element when a button is clicked
document.getElementById('toggle-element-btn').addEventListener('click', () => {
    const dynamicContent = document.getElementById('dynamic-content');
    if (dynamicContent.innerHTML === '') {
        dynamicContent.innerHTML = '<p>New Element Added!</p>';
    } else {
        dynamicContent.innerHTML = '';
    }
});