

import React, { useState } from "react";
import "./App.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

const AI_intrigratin = () => {
  const [Searchdata, setSearch] = useState("");
  const [ans, setAns] = useState("");
  const [loading, setLoading] = useState(false);

  // नई API Key यहाँ लगाइए
  const genAI = new GoogleGenerativeAI("YOUR_NEW_API_KEY");

  async function search() {
    if (Searchdata.trim() === "") {
      setAns("Please enter a question.");
      return;
    }

    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
      });

      let prompt = Searchdata;

      const q = Searchdata.toLowerCase();

      if (
        q.includes("date") ||
        q.includes("today") ||
        q.includes("time") ||
        q.includes("aaj") ||
        q.includes("आज") ||
        q.includes("तारीख") ||
        q.includes("दिन")
      ) {
        const now = new Date();

        prompt = `
Current Date & Time: ${now.toLocaleString("en-IN")}

User Question:
${Searchdata}

Always answer using the current date and time given above.
`;
      }

      const result = await model.generateContent(prompt);

      const response = await result.response;

      const text = response.text();

      setAns(text);
    } catch (error) {
      console.error(error);

      if (error.message.includes("429")) {
        setAns("API quota exceeded. Please try again later.");
      } else {
        setAns("Something went wrong.");
      }
    }

    setLoading(false);
  }

  function Delete() {
    setSearch("");
    setAns("");
  }

  return (
    <div id="main">
      <h1>Gemini Chat</h1>

      <input
        type="text"
        className="java"
        placeholder="Ask anything..."
        value={Searchdata}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      <button onClick={search}>Search</button>

      <button onClick={Delete} style={{ marginLeft: "10px" }}>
        Delete
      </button>

      <br />
      <br />

      {loading ? <h3>Loading...</h3> : <p>{ans}</p>}
    </div>
  );
};

export default AI_intrigratin;