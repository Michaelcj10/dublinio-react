import React, { useState } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const ImageSkeleton = styled.div`
  background: linear-gradient(to right, rgb(236, 233, 230), rgb(255, 255, 255));
  position: absolute;
  top: 0px;
`;

const Wrap = styled.div`
  position: relative;
`;

export default function ImageLoader({ alt, src, width, height, lazy }) {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return null;
  }

  return (
    <Wrap style={{ height: height, width: width }}>
      {!loaded && <ImageSkeleton style={{ height: height, width: width }} />}
      <img
        loading={lazy ? "lazy" : "eager"}
        alt={alt}
        src={src}
        style={{
          height: height,
          width: width,
          position: "absolute",
          top: "0px",
          visibility: loaded ? "visible" : "hidden",
        }}
        onLoad={() => {
          setLoaded(true);
        }}
        onError={() => {
          setHasError(true);
        }}
      />
    </Wrap>
  );
}

ImageLoader.propTypes = {
  alt: PropTypes.string.isRequired,
};

ImageLoader.defaultProps = {
  lazy: false,
};
