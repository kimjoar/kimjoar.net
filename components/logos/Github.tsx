import React from "react";
import Logo from "./Logo";
import { randomBetween, randomIn } from "../../lib/random";

const logoPath =
  "M32.5 5a27.5 27.5 0 0 0-8.7 53.6c1.4.2 1.9-.6 1.9-1.3v-5.1c-7.7 1.6-9.3-3.3-9.3-3.3-1.3-3.2-3-4-3-4-2.6-1.7.1-1.7.1-1.7 2.8.2 4.2 2.8 4.2 2.8 2.5 4.3 6.5 3 8 2.3.3-1.7 1-3 1.8-3.6C21.4 44 15 41.6 15 31c0-3 1-5.5 2.8-7.4a10 10 0 0 1 .3-7.3s2.3-.7 7.5 2.8a26.2 26.2 0 0 1 13.8 0c5.2-3.5 7.5-2.8 7.5-2.8 1.5 3.8.6 6.6.3 7.3C49 25.7 50 28 50 31c0 10.5-6.4 12.9-12.5 13.5 1 .9 1.9 2.6 1.9 5.1v7.6c0 .7.4 1.6 1.8 1.3A27.5 27.5 0 0 0 32.5 5z";

function GithubLogo() {
  return (
    <Logo
      className="icon-github"
      viewBox="0 0 65 65"
      onMount={(svg, rc) => {
        svg.appendChild(
          rc.path(logoPath, {
            stroke: "#000",
            strokeWidth: 0.3,
            roughness: randomIn([0.3, 0.5, 1]),
            fillWeight: randomIn([0.5, 0.7, 0.9]),
            hachureAngle: randomBetween(0, 180),
            hachureGap: randomIn([2, 3]),
            fill: "#000",
          })
        );
      }}
    />
  );
}

export default GithubLogo;
