import React from 'react';
import PropTypes from 'prop-types';
import './FileUpload.style.css';

const FileUpload = React.forwardRef(({ onFileChange, disabled, loading,...rest }, ref) => {
  return (
    <>
      <input
        type="file"
        id="file-upload"
        className="file-upload-input"
        onChange={onFileChange}
        disabled={disabled}
        ref={ref}
        accept=".xml"
        {...rest}
      />
      <label
        htmlFor="file-upload"
        className={`file-upload-label ${disabled ? 'disabled' : ''}`}
      >
        {loading ? 'Uploading...' : 'Upload XML File'}
      </label>
    </>
  );
});

export default FileUpload;

FileUpload.propTypes = {
  onFileChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};
