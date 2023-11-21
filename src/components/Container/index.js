import React from 'react';

const Container = ({ children }) => {
  const width = 1200; // 这里可以设置您想要的宽度值

  return (
    <div style={{ width: `${width}px`, margin: 'auto' }}>
      {children}
    </div>
  );
};

export default Container;
