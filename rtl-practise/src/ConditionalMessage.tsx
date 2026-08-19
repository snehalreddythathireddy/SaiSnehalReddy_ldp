import { useState } from "react";

const ConditionalMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>

      {showMessage && <p>Secret message</p>}
    </div>
  );
};

export default ConditionalMessage;