import s from "../styles/Stamp.module.css";

/**
 * The KJ "ex libris" stamp: a red double ring with the initials, tilted like a
 * stamp pressed by hand. `size` is the CSS font-size in px; the circle is 1.9×.
 * Needs the Fraunces CSS variable on an ancestor. The same geometry is exported
 * as outlined vectors in public/brand/.
 */
export default function Stamp({ size = 30 }: { size?: number }) {
  return (
    <span className={s.stamp} style={{ fontSize: `${size}px` }} aria-hidden="true">
      <span className={s.letters}>KJ</span>
    </span>
  );
}
