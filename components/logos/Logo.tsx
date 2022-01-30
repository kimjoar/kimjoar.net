import React, { useEffect, useRef } from "react";
import cx from "classnames";
import rough from "roughjs/bundled/rough.cjs.js";
import { RoughSVG } from "roughjs/bin/svg";

type Props = {
  className?: string;
  viewBox: string;
  onMount: (svg: SVGSVGElement, roughSvg: RoughSVG) => void;
};

function Logo({ className, viewBox, onMount }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;

    if (svg == null) {
      return;
    }
    const roughSvg = rough.svg(svg);

    onMount(svg, roughSvg);
  }, [onMount]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cx(className)}
      viewBox={viewBox}
      ref={svgRef}
    />
  );
}

export default Logo;
