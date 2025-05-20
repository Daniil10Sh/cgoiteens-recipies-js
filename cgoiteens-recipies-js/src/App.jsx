import Recipe from './Recipe';
import recipesData from './recipies.json'; // or fetch if in public folder
import { MdTimer } from "react-icons/md";
import { FaFire } from "react-icons/fa";

function App() {
  const icons = {
    time: <MdTimer />,
    calories: <FaFire />,

  }
  return (
    <div>
      {recipesData.map((recipe, index) => (
        <Recipe  key={index} recipe={recipe} icons={icons} />
      ))}
    </div>
  );
}

export default App;