// "use client";

// import { useState } from 'react';

// interface LookupResult {
//   reading: string;
//   meaning: string;
// }

// const LookupComponent = () => {
//   const [query, setQuery] = useState("");
//   const [result, setResult] = useState<LookupResult | "NOPE" | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setQuery(value);

//     // Clear previous result if the input is empty
//     if (value.trim() === "") {
//       setResult(null);
//       return;
//     }

//     setLoading(true);
//     try {
//       // Call the API endpoint using the query.
//       const res = await fetch(`/api/lookup/${encodeURIComponent(value)}`);
//       if (!res.ok) {
//         throw new Error(`Error: ${res.status}`);
//       }
//       const data: LookupResult | "NOPE" = await res.json();
//       setResult(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setResult(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "1rem" }}>
//       <input
//         type="text"
//         value={query}
//         onChange={handleChange}
//         placeholder="Enter a kanji word"
//         style={{ padding: "0.5rem", fontSize: "1rem", width: "100%" }}
//       />
//       {loading && <p>Loading...</p>}
//       {result && result !== "NOPE" && (
//         <div>
//           <p><strong>Reading:</strong> {result.reading}</p>
//           <p><strong>Meaning:</strong> {result.meaning}</p>
//         </div>
//       )}
//       {result === "NOPE" && <p>Word not found.</p>}
//     </div>
//   );
// };

// export default LookupComponent;
