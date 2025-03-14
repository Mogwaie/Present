import { useNavigate } from "react-router-dom";
import StoryCard from "./../StoryCard/StoryCard";

export default function StoryCardList() {
  const stories = [
    {
      id: 1,
      title: "1er jour",
      image: "1erjour.jpg",
      link: "StoryDisplay",
    },
    {
      id: 2,
      title: "A venir",
      image: "A venir.jpg",
      link: "StoryDisplay",
    },
  ];

  //   const navigate = useNavigate();
  //   const handleClick = () => {
  //     navigate(path);
  //   };

  return (
    <div>
      <h1>Choose a Story</h1>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <StoryCard story={story} />
          </li>
        ))}
      </ul>
    </div>
  );
}
