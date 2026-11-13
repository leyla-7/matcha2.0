import { type JSX } from "react";
import { MdOutlineExpandLess } from "react-icons/md";
import "./BackToTop.css";

export default function BackToTop(): JSX.Element {
  return (
    <a className="backtotop" href="#top" aria-label="Back to top">
      <MdOutlineExpandLess className="backtotop__icon" aria-hidden="true" />
    </a>
  );
}
