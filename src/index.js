const gameGenerator = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Sajjad-game',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const gameIdObject = await response.json();
  const gameId = gameIdObject.result.slice(14, 34);
  return gameId;
};
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const refresh = async (token, scoreList) => {
  const response = await fetch(url + token, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const object = await response.json();
  const score = await object.result;
  for (let i = 0; i < score.length; i += 1) {
    scoreList.innerHTML += `<tr><td> ${score[i].user} </td> <td> ${score[i].score} </td> </tr>`;
  }
};

const submit = async (gametoken, username, userscore) => {
  const response = await fetch(`${url + gametoken}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: username,
      score: userscore}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const object = await response.json();
  const res = object.result;
  return res;
};

export {
  gameGenerator, refresh, submit,
};