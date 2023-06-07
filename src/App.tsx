import React, { useCallback } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';

interface FileUploadProps {
  onFileUpload: (files: FileWithPath[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    onFileUpload(acceptedFiles);
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <p>Drag and drop files here, or click to select files</p>
      )}
    </div>
  );
};

export default FileUpload;
