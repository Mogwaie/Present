const storyData = [
  {
    id: 1,
    text: "You wake up in a mysterious forest. There's a path to the left and a cave to the right.",
    image: "forest.jpg",
    choices: [
      { text: "Go left", nextId: 2 },
      { text: "Enter the cave", nextId: 3 },
    ],
  },
  {
    id: 2,
    text: "You find a small village. The people seem friendly.",
    image: "village.jpg",
    choices: [
      { text: "Talk to the villagers", nextId: 4 },
      { text: "Keep walking", nextId: 5 },
    ],
  },
  {
    id: 3,
    text: "Inside the cave, you see glowing crystals. Something moves in the shadows.",
    image: "cave.jpg",
    choices: [
      { text: "Investigate", nextId: 6 },
      { text: "Run away", nextId: 1 },
    ],
  },
];

export default storyData;
