import React, { useRef, useEffect, useState } from "react";
import trianglify from "trianglify";

function Trianglify({ width = 600, height = 400, seed, ...props }) {
  const ref = useRef();
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const pattern = trianglify({
      width,
      height,
      seed,
      ...props,
    });

    const canvas = pattern.toCanvas();
    const ctx = ref.current.getContext("2d");
    ctx.drawImage(canvas, 0, 0, width, height);

    forceUpdate({});
  }, [width, height, seed]);

  return <canvas ref={ref} width={width} height={height} />;
}

export default Trianglify;
