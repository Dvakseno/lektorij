import React from 'react';

const lineStyle = {
  position: 'fixed',
  display: 'block',
  bottom: '0',
  left: '50%',
  height: '30px',
  width: '1px',
  backgroundColor: '#fff',
  opacity: '0.3'
};

const line = () => <span style={lineStyle} />;

export default line;
