import { useState } from "react";

export default function DiseaseDetectionForm() {
  const [crop, setCrop] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [region, setRegion] = useState("");
  const [image, setImage] = useState(null);
  const [detectionType, setDetectionType] = useState("text"); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    if (detectionType === "text") {
      const response = await fetch("/detect-disease-text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ crop, symptoms, region, sessionId: "farmer123" }),
      });
      const data = await response.json();
      alert(`Detected Disease: ${data.predictedDisease}\nTreatment: ${data.treatment}`);
    } 
    
    else if (detectionType === "image" && image) {
      formData.append("plantImage", image);
      const response = await fetch("/detect-disease-image", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      alert(`Detected Disease: ${data.predictedDisease}\nTreatment: ${data.treatment}`);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-green-700 mb-4">Plant Disease Detection</h2>

      <div className="mb-4">
        <label className="block font-semibold">Detection Type:</label>
        <select value={detectionType} onChange={(e) => setDetectionType(e.target.value)} 
                className="w-full p-2 border rounded-lg">
          <option value="text">Text-Based Detection</option>
          <option value="image">Image-Based Detection</option>
        </select>
      </div>

      {/* Crop Name */}
      <div className="mb-4">
        <label className="block font-semibold">Crop Name:</label>
        <input type="text" value={crop} onChange={(e) => setCrop(e.target.value)}
               className="w-full p-2 border rounded-lg" placeholder="Enter crop name..." />
      </div>

      {/* Symptoms (Text-Based) */}
      {detectionType === "text" && (
        <div className="mb-4">
          <label className="block font-semibold">Symptoms:</label>
          <textarea value={symptoms} onChange={(e) => setSymptoms(e.target.value)}
                    className="w-full p-2 border rounded-lg" placeholder="E.g., yellow leaves, black spots" />
        </div>
      )}

      {/* Region (Dropdown) */}
      <div className="mb-4">
        <label className="block font-semibold">Region:</label>
        <select value={region} onChange={(e) => setRegion(e.target.value)}
                className="w-full p-2 border rounded-lg">
          <option value="">Select Region</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Punjab">Punjab</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Karnataka">Karnataka</option>
        </select>
      </div>

      {/* Image Upload (Only for Image-Based Detection) */}
      {detectionType === "image" && (
        <div className="mb-4">
          <label className="block font-semibold">Upload Plant Image:</label>
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])}
                 className="w-full p-2 border rounded-lg" />
        </div>
      )}

      {/* Submit Button */}
      <button onClick={handleSubmit} className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700">
        Detect Disease
      </button>
    </div>
  );
}
