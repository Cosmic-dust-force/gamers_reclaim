import { useState } from "react";

export default function FileUpload({ onSubmitClickedHandler }) {
  const [selectedFile, setSelectedFile] = useState(null);

  function onFileChanged(event) {
    const file = event.currentTarget.files[0];
    setSelectedFile(file);
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    event.stopPropagation();
    onSubmitClickedHandler(selectedFile);
  }

  return (
    <form onSubmit={handleFormSubmission}>
      <input
        type="file"
        name="image"
        onChange={onFileChanged}
        required={true}
      />
      <button type="submit">Upload</button>
    </form>
  );
}
