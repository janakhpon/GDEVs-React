import React from 'react';

export default () => {
  return (
    <div>
      <div
        className="text-center spin-container"
        style={{ top:'45%', margin: "auto", display: "block" }}
      >
        <div className="spinner-grow text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};
