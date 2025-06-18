const GEMINI_API_KEY = "AIzaSyCmTpmM-5y0MIP89q0W-P1gXKsWspGKug0";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

export async function getGeminiResponse(promptText) {
  try {
    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: promptText,
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();
    console.log("Gemini Response:", data);
    return data;
  } catch (err) {
    console.error("Error fetching Gemini response:", err);
  }
}
