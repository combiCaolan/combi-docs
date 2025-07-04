import React, { useState } from 'react';

export default function WasThisHelpful() {
  const [feedback, setFeedback] = useState(null);

  const handleFeedback = (value) => {
    setFeedback(value);
    // TODO: Send feedback to your backend or analytics provider
  };

  if (feedback) {
    return <div>Thank you for your feedback!</div>;
  }

  return (
    <div style={{ marginTop: '2em', textAlign: 'center' }}>
      <span>Was this helpful? </span>
      <button onClick={() => handleFeedback('yes')}>👍 Yes</button>
      <button onClick={() => handleFeedback('no')}>👎 No</button>
    </div>
  );
}