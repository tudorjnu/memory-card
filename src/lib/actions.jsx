export async function getImages() {
  try {
    const response = await fetch(
      `https://emoji-api.com/emojis?access_key=${import.meta.env.VITE_API_KEY}`,
    );
    console.log("Got Response");
    const data = await response.json();
    return data.slice(0, 20);
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}

export function getDummyImages() {
  return [
    {
      code: "1F600",
      emoji: "😀",
      description: "grinning face",
      group: "Smileys & Emotion",
    },
    {
      code: "1F603",
      emoji: "😃",
      description: "grinning face with big eyes",
      group: "Smileys & Emotion",
    },
    {
      code: "1F604",
      emoji: "😄",
      description: "grinning face with smiling eyes",
      group: "Smileys & Emotion",
    },
    {
      code: "1F601",
      emoji: "😁",
      description: "beaming face with smiling eyes",
      group: "Smileys & Emotion",
    },
    {
      code: "1F606",
      emoji: "😆",
      description: "grinning squinting face",
      group: "Smileys & Emotion",
    },
    {
      code: "1F605",
      emoji: "😅",
      description: "grinning face with sweat",
      group: "Smileys & Emotion",
    },
    {
      code: "1F923",
      emoji: "🤣",
      description: "rolling on the floor laughing",
      group: "Smileys & Emotion",
    },
    {
      code: "1F602",
      emoji: "😂",
      description: "face with tears of joy",
      group: "Smileys & Emotion",
    },
    {
      code: "1F642",
      emoji: "🙂",
      description: "slightly smiling face",
      group: "Smileys & Emotion",
    },
    {
      code: "1F643",
      emoji: "🙃",
      description: "upside-down face",
      group: "Smileys & Emotion",
    },
    {
      code: "1F609",
      emoji: "😉",
      description: "winking face",
      group: "Smileys & Emotion",
    },
    {
      code: "1F60A",
      emoji: "😊",
      description: "smiling face with smiling eyes",
      group: "Smileys & Emotion",
    },
    {
      code: "1F607",
      emoji: "😇",
    },
    {
      code: "1F970",
      emoji: "🥰",
    },
    {
      code: "1F60D",
      emoji: "😍",
    },
  ];
}
