import React from "react";
import Logo from "./Logo";
import { randomBetween, randomIn } from "../../lib/random";

const size = 58;
const padding = 5;
const viewBox = `0 0 ${size} ${size}`;

const logoPath =
  "M40,58V35.57h7.57l1.13-8.78H40V21.2c0-2.54.71-4.26,4.35-4.26H49V9.1a64.2,64.2,0,0,0-6.75-.34C35.56,8.76,31,12.84,31,20.33v6.46H23.45v8.78H31V58Z";

function FacebookLogo() {
  return (
    <Logo
      className="icon-facebook"
      viewBox={viewBox}
      onMount={(svg, rc) => {
        const innerSize = size - padding * 2;

        svg.appendChild(
          rc.rectangle(padding, padding, innerSize, innerSize, {
            fill: "#4267b2",
            hachureAngle: randomBetween(100, 150),
            hachureGap: randomIn([2, 3, 4]),
            roughness: randomIn([1, 2]),
            strokeWidth: 1,
            fillWeight: 1,
            stroke: "#4267b2",
          })
        );
        svg.appendChild(
          rc.path(logoPath, {
            stroke: "white",
            hachureAngle: randomBetween(35, 55),
            hachureGap: 0.75,
            fill: "white",
          })
        );
      }}
    />
  );
}

export default FacebookLogo;
