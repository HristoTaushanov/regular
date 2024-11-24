const apiEndpoint = '<API_GATEWAY_ENDPOINT>'; // Replace with your API Gateway URL

document.getElementById('uploadButton')?.addEventListener('click', async () => {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    const file = fileInput?.files?.[0];

    if (!file) {
        alert('Please select a file!');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const statusElement = document.getElementById('status')!;
    statusElement.textContent = 'Uploading...';

    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();

        if (response.ok) {
            statusElement.textContent = `Upload successful! File ID: ${result.fileId}`;
        } else {
            statusElement.textContent = `Error: ${result.message}`;
        }
    } catch (error) {
        statusElement.textContent = `Error: ${error}`;
    }
});
