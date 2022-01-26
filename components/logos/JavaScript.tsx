import React from "react";
import Logo from "./Logo";
import { randomBetween, randomIn } from "../../lib/random";

const size = 58;
const padding = 5;
const viewBox = `0 0 ${size} ${size}`;

const logoPath =
  "M37.2 42.3c1.1 1.9 2.6 3.2 5.1 3.2 2.2 0 3.5-1 3.5-2.6 0-1.7-1.4-2.4-3.7-3.4l-1.3-.6c-3.8-1.5-6.2-3.5-6.2-7.7 0-4 3-6.9 7.5-6.9 3.3 0 5.7 1.2 7.4 4.2l-4 2.6c-1-1.6-1.9-2.3-3.4-2.3s-2.4 1-2.4 2.3c0 1.5 1 2.1 3.1 3l1.3.6c4.4 2 7 3.9 7 8.2 0 4.6-3.7 7.2-8.7 7.2-4.8 0-7.9-2.3-9.4-5.3zm-18.2.5c.8 1.4 1.5 2.7 3.3 2.7 1.7 0 2.8-.7 2.8-3.3V24.6h5.1v17.7c0 5.3-3.1 7.8-7.7 7.8a8 8 0 0 1-7.7-4.8z";

class JavaScriptLogo extends React.Component {
  render() {
    return (
      <Logo className="icon-js" viewBox={viewBox} onMount={this.onMount} />
    );
  }

  onMount(svg: SVGSVGElement, rc: any) {
    const innerSize = size - padding * 2;

    svg.appendChild(
      rc.rectangle(padding, padding, innerSize, innerSize, {
        fill: "#f7df1e",
        hachureAngle: randomBetween(100, 150),
        hachureGap: randomIn([2, 3, 4]),
        roughness: randomIn([1, 2, 3]),
        strokeWidth: 1,
        fillWeight: randomIn([1, 2]),
        stroke: "#f7df1e",
      })
    );

    svg.appendChild(
      rc.path(logoPath, {
        stroke: "#000",
        strokeWidth: 0.3,
        roughness: 0.5,
        fillWeight: 0.5,
        hachureAngle: randomBetween(35, 55),
        hachureGap: 2,
        fill: "#000",
      })
    );
  }
}

export default JavaScriptLogo;
