function showProductInfo(title, description, review) {
    document.getElementById('modal-product-title').innerText = title;
    document.getElementById('modal-product-description').innerText = description;
    document.getElementById('modal-product-review-text').innerText = review;
    document.getElementById('product-info-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('product-info-modal').style.display = 'none';
}

window.onload = function() {
    const images = document.querySelectorAll('.grid div img');
    images.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2)';
            this.style.transition = 'transform 0.3s ease';
        });
        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.3s ease';
        });
    });
};

function addToCart() {
    window.location.href = '../shopping_cart/s.html';  
}