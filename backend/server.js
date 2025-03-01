const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); // Assuming you may want to fetch external data

const app = express();
const port = 5000;

app.use(bodyParser.json());

// AI model integration example function (SSL certificate check)
const analyzeSSL = async (url) => {
    try {
        // Simple SSL analysis logic
        // You can replace this with a real AI model or library
        const response = await axios.get(`https://api.ssllabs.com/api/v3/analyze?host=${url}`);
        return response.data;
    } catch (error) {
        throw new Error('Error analyzing SSL certificate');
    }
};

// Endpoint to analyze URL
app.post('/analyze_url', async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: 'No URL provided' });
    }

    try {
        const sslInfo = await analyzeSSL(url);
        res.json({ ssl_info: sslInfo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
