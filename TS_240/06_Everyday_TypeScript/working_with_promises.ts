// function getData(url) {
//   return fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

async function getData(url: string): Promise<void> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch(e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error('An unknown error occured.');
    }
  }
}