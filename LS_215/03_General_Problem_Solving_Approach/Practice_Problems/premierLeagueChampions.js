/*

Create a function that takes an array of football clubs with 
properties: name, wins, loss, draws, scored, conceded,
and returns the team name with the highest number of points. 

If two teams have the same number of points, return the team with the largest goal difference.

INPUT:
  - array of objects (football teams)
OUTPUT:
  - string: name of team with highest points

RULES:
  - if input array is empty, return null
  - obj will always have the properties: name, wins, loss, draws, scored, conceded
  - determine the points for every object:
    - (3 * wins) + (0 * loss) + (1 * draws)
  - if two teams have the same number of points:
    - return the team with the largest goal difference:
    - (scored - conceded)
  - if input array is sparse, ignore empty elements
  - assume no duplicate teams are present in input array
  - assume input array only contains objects
  - assume objects are never empty
  - assume objects will never have duplicate key/value pairs
  - assume its not ok to mutate objects from input

DS: array of elements (scores or points)

points = {
  'manchester': [points, goal difference],
}

ALGO:

1. if input array is empty, return null

2. initialize an empty object called `scores` to keep track of teams points & goal difference

3. iterate through the input array
  - for each object, calculate the points using calculateScore(obj) helper
  - assign the team name as a key in the score object
  - assgn the returned value of total points as the value for that team in the object

4. Determine the highest team's points
  - convert scores object to array
  - sort the array based points
  - assign highest score to a variable called highestPoint

5. If more than two teams have the highest points return the team with the highest goal difference
  - filter the array form of the object to see how many teams have points that matches the highestPoint
    - if length of returned array is 1: return the name of the team
    - if length of returned array is more than 1:
      - sort the result based on goal difference, and return the team name with highest goal difference

HELPER calculateScore(object) -> [points, goalDifference]
1. calculate the total points
  - (3 * wins) + (0 * loss) + (1 * draws)

2. calcualte the total goal difference
  - (scored - conceded)

3. return the array with both values like: [points, goalDifference]
*/

function champions(teams = []) {
  if (teams.length === 0) return null;

  const scores = {};
  let highestPoint;

  teams.forEach(team => {
    scores[team.name] = calculateScore(team);
  });

  const arr = Object.entries(scores).sort((a, b) => b[1][0] - a[1][0]);
  highestPoint = arr[0][1][0];

  if (arr.filter(team => team[1][0] === highestPoint).length > 1) {
    return arr.map(team => {
      team[1] = team[1][1];
      return team;
    }).sort((a, b) => b[1] - a[1])[0][0];
  } else {
    return arr[0][0];
  }
}

function calculateScore({wins, loss, draws, scored, conceded}) {
  const points = (3 * wins) + (0 * loss) + (1 * draws);
  const goalDifference = scored - conceded;

  return [points, goalDifference];
}

// refactor

function champions(teams = []) {
  if (teams.length === 0) return null;

  const scores = teams.map(team => ({
    name: team.name,
    points: 3 * team.wins + team.draws,
    goalDifference: team.scored - team.conceded,
  }));

  scores.sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference);
  return scores[0].name;
}

console.log(champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
]))

// => "Manchester United"

console.log(champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
]))

// => Arsenal

console.log(champions([]));

// => null