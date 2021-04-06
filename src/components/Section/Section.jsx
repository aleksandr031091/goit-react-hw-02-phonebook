import ProtoType from "prop-types";
import scss from "./Section.module.scss";

const Section = ({ title, children }) => {
  return (
    <div className={scss.section}>
      <h1 className={scss.tittle}>{title}</h1>
      {children}
    </div>
  );
};

export default Section;

Section.prototype = {
  title: ProtoType.string.isRequired,
};
