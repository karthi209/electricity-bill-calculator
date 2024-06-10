import React from 'react';

const GoBack = (setResult) => {
  setResult(null);
  localStorage.removeItem("result");
};

export default GoBack;
