import React from 'react';
import Lottie from 'react-lottie'

import loading from './animations/circle.json'

const Loading = () => {
  const defaultOptions = {

    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="loading">
     <div>
     <Lottie options={defaultOptions} width = {200} height = {200} />
     </div>
    </div>
  );
};

export default Loading;
