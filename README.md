🌱 Crop Yield Predictor — AI for Every Farmer
Predict your crop yield in seconds with a modern, interactive web app powered by machine learning!
This repo brings together data science, API engineering, and beautiful UI design into one seamless experience.

🛠️ What’s Inside
Sleek Web Interface
A clean, mobile-friendly UI where you simply enter rainfall, temperature, soil, crop, and more. Get instant, easy-to-understand yield predictions—in tons, with a ±0.5 ton range.

Machine Learning Pipeline
The crop_yeild.py script contains all data science magic: EDA, cleaning, model training (Linear Regression, XGBoost), and export for API deployment.

API Ready
Built for FastAPI, so your models are just a POST request away from any frontend—or even other tools.

Full Deployment Workflow
The web UI can be hosted instantly via GitHub Pages, and the API backend is cloud-friendly (e.g., Render).

🚀 How to Use
Try the Web App

Visit [link](https://aletiadarsh.github.io/Crop-Yeild_predictor/)

Enter your field data (rainfall, fertilizer, soil, crop type, etc.)

Hit “Predict” and see your crop’s estimated yield (in tons)!

Data Science & Model Training

Open crop_yeild.py in Jupyter or VSCode

Explore the workflow from raw CSV → ML model export

API for Developers

The UI connects to a FastAPI /predict/crop endpoint—plug in your own backend or extend it with more crops and regions.

🌟 Why this project?
For everyone: Farmers, students, agri-tech startups, and researchers.

Transparent: See exactly how the model works, from feature engineering to prediction.

Customizable: Easily add new crops, soil types, or regions in both the UI and backend.

💡 Tech Stack
Python (Pandas, Scikit-learn, XGBoost)

FastAPI (for real-time prediction API)

HTML5 + CSS3 + JS (for the beautiful UI)

GitHub Pages (for hassle-free hosting)

Render.com or similar (for the API backend)

📢 Feedback & Contributions
Your ideas are welcome!
Open an issue, suggest new features, or fork the repo to build your own agri-data apps.

🪴 License
Apache 2  — Free for all, just like the rain.
Give a star if this project helped you or your community! ⭐
