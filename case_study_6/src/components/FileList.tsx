import { useDesignHubStore } from "../store/index";

function FileList() {
  // Subscribe only to files state
  const files = useDesignHubStore((state) => state.files);

  // Subscribe only to file actions
  const addFile = useDesignHubStore((state) => state.addFile);

  return (
    <div>
      <h2>Files</h2>

      <button
        onClick={() =>
          addFile({
            id: Date.now().toString(),
            name: "New File",
            content: "",
          })
        }
      >
        Add File
      </button>

      {files.length === 0 && <p>No files available</p>}

      <ul>
        {files.map((file) => (
          <li key={file.id}>
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileList;