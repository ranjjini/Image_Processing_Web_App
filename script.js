document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const files = document.getElementById('imageInput').files;
    if (files.length === 0) {
        alert('Please select at least one image to upload.');
        return;
    }

    for (let i = 0; i < files.length; i++) {
        displayImage(files[i], 'originalImageContainer');
        processAndDisplayImage(files[i], 'processedImageContainer');
    }
    document.getElementById('uploadForm').reset();
});

document.getElementById('grayscaleFilter').addEventListener('click', function() {
    applyFilter('grayscale(100%)');
});

document.getElementById('invertFilter').addEventListener('click', function() {
    applyFilter('invert(100%)');
});

document.getElementById('sepiaFilter').addEventListener('click', function() {
    applyFilter('sepia(100%)');
});

document.getElementById('cropButton').addEventListener('click', function() {
    const x = parseInt(document.getElementById('cropX').value);
    const y = parseInt(document.getElementById('cropY').value);
    const width = parseInt(document.getElementById('cropWidth').value);
    const height = parseInt(document.getElementById('cropHeight').value);
    cropImage(x, y, width, height);
});

document.getElementById('resizeButton').addEventListener('click', function() {
    const width = parseInt(document.getElementById('resizeWidth').value);
    const height = parseInt(document.getElementById('resizeHeight').value);
    resizeImage(width, height);
});

document.getElementById('rotateButton').addEventListener('click', function() {
    const angle = parseInt(document.getElementById('rotateAngle').value);
    rotateImage(angle);
});

document.getElementById('flipHorizontalButton').addEventListener('click', function() {
    flipImage('horizontal');
});

document.getElementById('flipVerticalButton').addEventListener('click', function() {
    flipImage('vertical');
});

function displayImage(file, containerId) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.src = event.target.result;
        img.onload = function() {
            document.getElementById(containerId).appendChild(img);
        };
    };
    reader.readAsDataURL(file);
}

function processAndDisplayImage(file, containerId) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.src = event.target.result;
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const processedDataUrl = canvas.toDataURL('image/jpeg');
            const processedImg = new Image();
            processedImg.src = processedDataUrl;
            processedImg.onload = function() {
                document.getElementById(containerId).appendChild(processedImg);
            };
        };
    };
    reader.readAsDataURL(file);
}

function applyFilter(filter) {
    const processedImages = document.querySelectorAll('#processedImageContainer img');
    processedImages.forEach(image => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);
        ctx.filter = filter;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        image.src = canvas.toDataURL('image/jpeg');
    });
}

function cropImage(x, y, width, height) {
    const processedImages = document.querySelectorAll('#processedImageContainer img');
    processedImages.forEach(image => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(image, x, y, width, height, 0, 0, canvas.width, canvas.height);
        image.src = canvas.toDataURL('image/jpeg');
    });
}

function resizeImage(width, height) {
    const processedImages = document.querySelectorAll('#processedImageContainer img');
    processedImages.forEach(image => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(image, 0, 0, width, height);
        image.src = canvas.toDataURL('image/jpeg');
    });
}

function rotateImage(angle) {
    const processedImages = document.querySelectorAll('#processedImageContainer img');
    processedImages.forEach(image => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = image.height;
        canvas.height = image.width;
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(angle * Math.PI / 180);
        ctx.drawImage(image, -image.width / 2, -image.height / 2);
        image.src = canvas.toDataURL('image/jpeg');
    });
}

function flipImage(direction) {
    const processedImages = document.querySelectorAll('#processedImageContainer img');
    processedImages.forEach(image => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        if (direction === 'horizontal') {
            ctx.translate(canvas.width, 0);
            ctx.scale(-1, 1);
        } else if (direction === 'vertical') {
            ctx.translate(0, canvas.height);
            ctx.scale(1, -1);
        }
        ctx.drawImage(image, 0, 0);
        image.src = canvas.toDataURL('image/jpeg');
    });
}
