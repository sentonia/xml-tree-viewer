import { useState, useRef } from 'react';
import xmljs from 'xml-js';
import XMLViewer from './components/XMLViewer/XMLViewer';
import FileUpload from './components/FileUpload/FileUpload';
import { SyncLoader } from 'react-spinners';
import './App.css';

function App() {
  const [xmlData, setXmlData] = useState(null);
  const [loading, setLoading] = useState(false);
  // Reference to the file input element for handling file uploads
  const fileInputRef = useRef(null);

  // Check XML data and loading values for button states
  const canProcessXML = Boolean(xmlData && !loading);
  const canClearXML = Boolean(!xmlData || loading);

  //---------------- Handlers ------------------/=
  // Handle XML file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    // Start the loader
    setLoading(true);

    reader.onload = (e) => {
      const xmlString = e.target.result;
      const jsonObj = xmljs.xml2js(xmlString, { compact: true });

      // Simulate a delay
      setTimeout(() => {
        // Update the XML data
        setXmlData(jsonObj);
        // Stop the loader after processing
        setLoading(false);
        // Reset the file input
        fileInputRef.current.value = '';
      }, 3000);
    };

    reader.readAsText(file);
  };

  //-- clear xml data
  const handleClearXML = () => {
    setXmlData(null);
  };

  //---------- Render ------------------
  return (
    <div className="app">
      <header className="app-header">
        <h1>XML Tree-tment🌳</h1>
      </header>
      <main className="app-container">
        <div className="actions-panel">
          <FileUpload
            onFileChange={handleFileUpload}
            disabled={canProcessXML}
            ref={fileInputRef}
            loading={loading}
          />
          <button
            type="button"
            className="action-button action-button-danger"
            onClick={handleClearXML}
            disabled={canClearXML}
          >
            Clear XML
          </button>
        </div>
        {loading ? (
          <div className="loader">
            <SyncLoader color={'#30494C'} loading={loading} size={10} />
          </div>
        ) : (
          <XMLViewer xmlData={xmlData} />
        )}
      </main>
    </div>
  );
}

export default App;
