import React from 'react';
import DocLayout from '@theme-original/DocLayout';

export default function CustomDocLayout(props) {
  return (
    <>
      {/* Add your HTML here */}
      <div style={{
        width: "100%",
        background: "#e3f4ff",
        color: "#222",
        padding: "12px 0",
        textAlign: "center",
        fontWeight: 600,
        borderBottom: "1px solid #b3d8f4"
      }}>
        {/* This is your custom HTML/React element */}
        👋 Welcome to the documentation!
      </div>
      <DocLayout {...props} />
    </>
  );
}