import ProtoType from "prop-types";
import scss from "./Container.module.scss";

const Container = ({ title, children }) => {
  return (
    <div className={scss.container}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Container;

Container.prototype = {
  title: ProtoType.string.isRequired,
};
