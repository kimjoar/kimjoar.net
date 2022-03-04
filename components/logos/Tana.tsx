import React from "react";
import Logo from "./Logo";
import { randomBetween, randomIn } from "../../lib/random";

const paths = [
  {
    d: "M103.259 81.4255V35.545C103.235 33.5191 103.735 31.5215 104.71 29.7459C105.686 27.9702 107.104 26.4765 108.827 25.4108L148.583 2.47123C150.366 1.46104 152.38 0.929688 154.429 0.929688C156.478 0.929688 158.493 1.46104 160.276 2.47123L302.873 84.8212C304.6 85.8828 306.021 87.3756 306.997 89.1522C307.973 90.9288 308.471 92.9285 308.441 94.9554V140.78C308.475 142.815 307.979 144.824 307.003 146.611C306.027 148.397 304.604 149.9 302.873 150.97L263.173 173.91C261.381 174.925 259.357 175.459 257.298 175.459C255.239 175.459 253.216 174.925 251.424 173.91L108.827 91.5597C107.1 90.4981 105.679 89.0053 104.703 87.2287C103.727 85.4521 103.229 83.4523 103.259 81.4255Z",
  },
  {
    d: "M206.048 266.567V319.185C206.072 321.211 205.572 323.208 204.596 324.984C203.621 326.76 202.203 328.253 200.48 329.319L160.78 352.259C158.988 353.274 156.964 353.807 154.905 353.807C152.846 353.807 150.822 353.274 149.031 352.259L109.331 329.319C107.608 328.253 106.19 326.76 105.214 324.984C104.239 323.208 103.739 321.211 103.763 319.185V154.538C103.733 152.511 104.231 150.511 105.207 148.735C106.183 146.958 107.604 145.467 109.331 144.405L155.044 117.957L206.493 147.689L206.048 266.567Z",
  },
  {
    d: "M103.316 140.948V95.0676C103.323 93.006 102.779 90.9792 101.742 89.1978C100.704 87.4163 99.21 85.9444 97.4133 84.9334L57.7132 61.9938C55.9395 60.9565 53.922 60.4102 51.8672 60.4102C49.8124 60.4102 47.7943 60.9565 46.0205 61.9938L6.32047 84.9334C4.52378 85.9444 3.02976 87.4163 1.9922 89.1978C0.954647 90.9792 0.410843 93.006 0.418039 95.0676V141.06C0.422347 143.119 0.970767 145.14 2.00716 146.92C3.04355 148.699 4.53147 150.174 6.32047 151.194L46.0205 174.133C47.8035 175.143 49.818 175.675 51.8672 175.675C53.9165 175.675 55.9303 175.143 57.7132 174.133L97.4133 151.194C99.2188 150.165 100.717 148.673 101.754 146.872C102.792 145.072 103.331 143.026 103.316 140.948Z",
  },
];

function TanaLogo() {
  return (
    <Logo
      className="icon-tana"
      viewBox="0 0 309 354"
      onMount={(svg, rc) => {
        const hachureAngle = randomBetween(0, 180);
        const hachureGap = randomIn([6, 8, 10, 12, 14]);
        const roughness = randomIn([4, 6, 8, 10]);
        const strokeWidth = randomIn([2, 3, 4]);
        const fillStyle = randomIn([
          "hachure",
          "cross-hatch",
          "zigzag",
          "zigzag-line",
        ]);
        const color = "#0F261F";

        paths.forEach((path) => {
          svg.appendChild(
            rc.path(path.d, {
              stroke: color,
              strokeWidth,
              hachureAngle,
              hachureGap,
              fillWeight: 1,
              roughness,
              fill: color,
              fillStyle,
            })
          );
        });
      }}
    />
  );
}

export default TanaLogo;
