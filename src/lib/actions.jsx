import _ from "lodash";

function sample(size) {
  let randomNumbers = new Set();

  while (randomNumbers.size < size) {
    let randomNumber = Math.floor(Math.random() * 1000) + 1;
    randomNumbers.add(randomNumber);
  }

  return Array.from(randomNumbers);
}

export function getDeck(nSamples = 100) {
  let images = [];
  const samples = sample(nSamples);

  for (let i = 0; i < samples.length; i++) {
    const cardNumber = samples[i];
    images.push({
      index: i,
      link: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cardNumber}.png`,
      clicked: false,
    });
  }
  return images;
}
