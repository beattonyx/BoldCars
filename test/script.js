document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('runScriptButton');
    button.addEventListener('click', () => {
        fetch('/run-script', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                console.log(data.message);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});