import _ from "lodash";

function sample(size) {
  let randomNumbers = new Set();

  while (randomNumbers.size < size) {
    let randomNumber = Math.floor(Math.random() * 1000) + 1;
    randomNumbers.add(randomNumber);
  }

  console.log(randomNumbers);
  return Array.from(randomNumbers);
}

export function getDeck(nSamples = 100) {
  let images = [];
  const samples = sample(nSamples);

  for (const index in samples) {
    images.push({
      number: index,
      link: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`,
      clicked: false,
    });
  }
  return images;
}
