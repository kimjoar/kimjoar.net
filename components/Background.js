import { useMemo } from "react";
import Trianglify from "./Trianglify";
import useWindowSize from "./useWindowSize";

const trianglifyOptions = {
  cellSize: 50,
};

export default function Background() {
  const windowSize = useWindowSize();
  const seed = useMemo(() => String(Math.random()), []);

  if (windowSize.height == null) {
    return null;
  }

  return <Trianglify {...windowSize} {...trianglifyOptions} seed={seed} />;
}
