import StoryCardList from "../components/StoryCards/StoryCardList";
import StoryDisplay from "./StoryDisplay/StoryDisplay";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Hello, my love!</h1>
      <Link to="/storyDisplay">
        <StoryCardList />
      </Link>
    </div>
  );
};

export default Home;
