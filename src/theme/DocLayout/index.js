import React from 'react';
import DocLayout from '@theme-original/DocLayout';

export default function CustomDocLayout(props) {
  return (
    <>
      <DocLayout {...props} />
      <div
        style={{
          position: 'fixed',
          top: 100,
          right: 24,
          zIndex: 9999,
          background: '#2e8555',
          color: '#fff',
          padding: '16px 20px',
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
          maxWidth: 280,
        }}
      >
        {/* Floating content */}
        <strong>Need help?</strong>
        <p style={{margin: 0, fontSize: 15}}>
          This box stays on the right side as you scroll the docs!
        </p>
      </div>
    </>
  );
}