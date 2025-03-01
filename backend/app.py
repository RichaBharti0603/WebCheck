from flask import Flask, request, jsonify
import requests
import os

app = Flask(__name__)

# Replace with your actual API key
API_KEY = "AIzaSyCE8J6mg6eaLf8SA6j3JaMWWpRgrByjn_4"
BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"

@app.route('/generate_content', methods=['POST'])
def generate_content():
    # Get the content to send to Gemini API from the POST request
    content = request.json.get('content', 'Explain how AI works')

    # Prepare the data for the Gemini API request
    data = {
        "contents": [{
            "parts": [{
                "text": content
            }]
        }]
    }

    # Set the request headers
    headers = {
        'Content-Type': 'application/json'
    }

    # Make the request to the Gemini API
    response = requests.post(
        f"{BASE_URL}?key={API_KEY}",
        json=data,
        headers=headers
    )

    if response.status_code == 200:
        # Extract the content from the response and return it
        generated_content = response.json()
        return jsonify(generated_content), 200
    else:
        return jsonify({"error": "Failed to generate content"}), response.status_code

if __name__ == '__main__':
    app.run(debug=True)
