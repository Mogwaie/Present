import { useNavigate } from "react-router-dom";

export default function StoryCard({ story }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(story.link);
  };

  return (
    <button type="button" onClick={handleClick}>
      <img src={story.image} alt={story.title} />
      <h2>{story.title}</h2>
    </button>
  );
}
