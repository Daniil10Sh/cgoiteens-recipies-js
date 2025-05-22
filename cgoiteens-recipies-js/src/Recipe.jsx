import styled from "styled-components";
import RecipeInfo from "./RecipeInfo";
import PropTypes from "prop-types";
import { MdTimer } from "react-icons/md";
import { RiNumbersFill } from "react-icons/ri";


const Title = styled.h1`
  font-size: 180px;
`;

export default function Recipe({ recipe }) {
  const { name, time, servings, calories, difficulty, image } = recipe;

  const images = {
    time: <MdTimer />,
    calories: <RiNumbersFill />,
  }

  return (
    <>
      <div className="recipe-container">
        <div className="text">
          <Title>Hello</Title>
          <p>{name}</p>
        </div>
        <div className="image">
          <img src={image} alt="image" width="300" />
        </div>
        <RecipeInfo text={time} icon={images.time} />
        <RecipeInfo text={servings} />
        <RecipeInfo text={calories} icon={images.calories} />
        <RecipeInfo text={difficulty} />
      </div>
    </>
  );
}
Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  icon: PropTypes.shape({
    time: PropTypes.element.isRequired,
    calories: PropTypes.element.isRequired,
  }).isRequired,
};