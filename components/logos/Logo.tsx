import React from "react";
import cx from "classnames";
import rough from "roughjs/bundled/rough.cjs.js";

interface Props {
  className?: string;
  viewBox: string;
  onMount: (svg: SVGSVGElement, rc: any) => void;
}

class Logo extends React.Component<Props> {
  svgRef: React.RefObject<SVGSVGElement> = React.createRef();

  componentDidMount() {
    const svg = this.svgRef.current;

    if (svg == null) {
      return;
    }
    const rc = rough.svg(svg);

    this.props.onMount(svg, rc);
  }

  render() {
    const { className, viewBox } = this.props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={cx(className)}
        viewBox={viewBox}
        ref={this.svgRef}
      />
    );
  }
}

export default Logo;
