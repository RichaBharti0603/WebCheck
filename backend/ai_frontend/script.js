document.getElementById('analyzeButton').addEventListener('click', async () => {
    const url = document.getElementById('urlInput').value;
    const resultsDiv = document.getElementById('results');

    if (!url) {
        resultsDiv.textContent = 'Please enter a URL.';
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/analyze_url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: url })
        });

        if (!response.ok) {
            throw new Error('Failed to analyze the URL');
        }

        const data = await response.json();
        if (data.ssl_info) {
            resultsDiv.innerHTML = `
                <h2>SSL Certificate Analysis</h2>
                <p>Status: ${data.ssl_info.status}</p>
                <p>Issuer: ${data.ssl_info.issuer}</p>
                <p>Subject: ${data.ssl_info.subject}</p>
                <p>Valid From: ${data.ssl_info.valid_from}</p>
                <p>Valid To: ${data.ssl_info.valid_to}</p>
            `;
        } else {
            resultsDiv.textContent = 'No results found.';
        }
    } catch (error) {
        console.error('Error:', error);
        resultsDiv.textContent = `An error occurred: ${error.message}`;
    }
});
document.getElementById('analyzeButton').addEventListener('click', async () => {
    const url = document.getElementById('urlInput').value;
    const resultsDiv = document.getElementById('results');
    const loadingDiv = document.getElementById('loading');
    resultsDiv.textContent = ''; 
    loadingDiv.style.display = 'block';

    try {
        const response = await fetch('http://localhost:5000/analyze_url', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: url })
        });

        if (!response.ok) {
            throw new Error('Failed to analyze the URL');
        }

        const data = await response.json();
        loadingDiv.style.display = 'none'; 

        if (data.ssl_info) {
            resultsDiv.innerHTML = `
                <h2>SSL Certificate Analysis</h2>
                <p>Status: ${data.ssl_info.status}</p>
                <p>Issuer: ${data.ssl_info.issuer}</p>
                <p>Subject: ${data.ssl_info.subject}</p>
                <p>Valid From: ${data.ssl_info.valid_from}</p>
                <p>Valid To: ${data.ssl_info.valid_to}</p>
            `;
        } else {
            resultsDiv.textContent = 'No results found.';
        }
    } catch (error) {
        loadingDiv.style.display = 'none';
        resultsDiv.textContent = `An error occurred: ${error.message}`;
    }
});

