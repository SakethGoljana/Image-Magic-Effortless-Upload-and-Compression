
function displayFileName() {
    const fileInput = document.getElementById('file-input');
    const fileName = document.getElementById('fileName');

    if (fileInput.files.length > 0) {
        fileName.textContent = `Selected file: ${fileInput.files[0].name}`;
    } else {
        fileName.textContent = ''; 
    }
}

document.addEventListener('DOMContentLoaded', function () {
   
    document.getElementById('file-input').addEventListener('change', displayFileName);

    
    document.getElementById('uploadForm').addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const loadingSpinner = document.getElementById('loading');
        const loadingOverlay = document.getElementById('loading-overlay');

        loadingOverlay.style.display = 'block';

    
        await new Promise(resolve => setTimeout(resolve, 100));

        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });

        const result = await response.json(); 

        const outputDiv = document.getElementById('output');
        const originalImage = document.getElementById('originalImage');
        const compressedImage = document.getElementById('compressedImage');
        const downloadLink = document.getElementById('downloadLink');

        loadingOverlay.style.display = 'none';

        if (response.ok) {
        
            outputDiv.innerHTML = `
                <p>Original Size: ${result.original_size} KB</p>
                <p>Compressed Size: ${result.compressed_size} KB</p>
            `;

         
            originalImage.src = result.original_image;
            compressedImage.src = result.compressed_image;

            originalImage.style.display = 'block';
            compressedImage.style.display = 'block';
            

            downloadLink.href = result.compressed_image;
            downloadLink.style.display = 'inline-block';
        } else {
            outputDiv.innerHTML = `<p>Error: ${result.error}</p>`;
        }
    });
});
