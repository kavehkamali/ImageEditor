function loadImage() {
    document.getElementById('imageLoader').click();
}

function handleImage(event) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = document.getElementById('displayImage');
        img.src = event.target.result;
        img.onload = function() {
            const imageBox = document.querySelector('.image-box');
            const maxBoxWidth = 0.8 * window.innerWidth - 240; // 80% of the viewport width minus sidebar width
            const maxBoxHeight = 0.8 * window.innerHeight; // 80% of the viewport height
            
            const imageAspectRatio = img.naturalWidth / img.naturalHeight;
            const boxAspectRatio = maxBoxWidth / maxBoxHeight;
            
            if (imageAspectRatio > boxAspectRatio) {
                // Image is wider
                imageBox.style.width = `${Math.min(img.naturalWidth, maxBoxWidth)}px`;
                imageBox.style.height = `${Math.min(img.naturalWidth / imageAspectRatio, maxBoxHeight)}px`;
            } else {
                // Image is taller
                imageBox.style.width = `${Math.min(img.naturalHeight * imageAspectRatio, maxBoxWidth)}px`;
                imageBox.style.height = `${Math.min(img.naturalHeight, maxBoxHeight)}px`;
            }
            
            img.classList.remove('hidden');
        }
    }
    reader.readAsDataURL(event.target.files[0]);
}

function showMessage(message) {
    alert(message);
}
