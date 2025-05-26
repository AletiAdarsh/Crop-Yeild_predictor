const API_URL = "https://multi-model-api.onrender.com/predict/crop";
...
const res = await fetch(API_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ features })
});
