from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from openrouter_api import call_openrouter_api

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "FastAPI + OpenRouter is working!"}

@app.get("/ask")
async def ask_openrouter(question: str = Query(...)):
    try:
        response = await call_openrouter_api(question)
        return {
            "response": response["choices"][0]["message"]["content"]
        }
    except Exception as e:
        return {"error": "Something went wrong", "details": str(e)}
