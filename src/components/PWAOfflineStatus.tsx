import React, { useState, useEffect } from 'react';

interface PWAOfflineStatusProps {
  // You can define props here if needed
}

const PWAOfflineStatus: React.FC<PWAOfflineStatusProps> = (props) => {
  const [isOnline, setOnlineStatus] = useState(true);

  useEffect(() => {
    const setFromEvent = (event: Event) => {
      if (event.type === 'online') {
        setOnlineStatus(true);
      } else if (event.type === 'offline') {
        setOnlineStatus(false);
      }
    }

    window.addEventListener("online", setFromEvent);
    window.addEventListener("offline", setFromEvent);

    return () => {
      window.removeEventListener("online", setFromEvent);
      window.removeEventListener("offline", setFromEvent);
    }
  }, []);

  return !isOnline ? (
    <>
      <h5 className='pwa-warning'>
        You are currently offline. <br /> Access to the application might be limited.
      </h5>
      {/* <style jsx>{`
        .pwa-warning {
          background-color: orange;
          color: black;
          text-align: center;
          padding: 10px;
        }
      `}</style> */}
    </>
  ) : null;
};

export default PWAOfflineStatus;
