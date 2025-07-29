
import os
import aiohttp
from dotenv import load_dotenv

load_dotenv()

API_URL = "https://openrouter.ai/api/v1/chat/completions"
API_KEY = os.getenv("OPENROUTER_API_KEY")

HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

async def call_openrouter_api(question):
    payload = {
        "model": "openai/gpt-3.5-turbo",
        "messages": [{"role": "user", "content": question}]
    }

    async with aiohttp.ClientSession() as session:
        async with session.post(API_URL, headers=HEADERS, json=payload) as response:
            return await response.json()
