let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  bands.map(band => {
    updateCountry(band);
    capitalizeBandName(band);
    removeDotsInBandName(band);
    return band;
  });
}

function capitalizeBandName(band) {
  band.name = band.name.split(' ').map(word => word[0] + word.slice(1));
}

function updateCountry(band) {
  band.country = 'Canada';
}

function removeDotsInBandName(band) {
  band.name = band.name.replace(/\./g, '');
}

console.log(processBands(bands));

// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]

// Solution with no side effects

function processBands(bands) {
  return bands.map(band => {
    let capitalizedName = capitalizePhrase(band.name);
    let newBandName = removeDotsInString(capitalizedName);

    return {
      name: newBandName,
      country: 'Canada',
      active: band.active,
    };
  });
}

function capitalizePhrase(phrase) {
  return phrase.split(' ')
               .map(word => capitalizeString(word))
               .join(' ');
}

function capitalizeString(string) {
  let initial = string[0].toUpperCase();
  let rest = string.slice(1, string.length);
  return initial + rest;
}

function removeDotsInString(string) {
  return string.replace(/\./g, '');
}