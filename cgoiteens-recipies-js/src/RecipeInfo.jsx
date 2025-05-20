import PropTypes from "prop-types";

export default function RecipeInfo({ icon, text }) {
  return <p>{text} {icon}</p>;
}

RecipeInfo.propTypes = {
  text: PropTypes.element.isRequired,
  icon: PropTypes.string.isRequired,
};