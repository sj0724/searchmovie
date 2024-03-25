const url = "https://api.themoviedb.org/3";
const key =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzM0NmFjZDdmNzA3ZmFhNTYwZjBjYjQzYjdjZWI0MyIsInN1YiI6IjY1ZjkyMDhmNGI5YmFlMDE4MzdlN2E0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ssop6XkD3mGVgWcFSPvDwPl8Y2UMV6bIf3fzjkVjSLs";

export async function getList({ language = "en", page, request = "popular" }) {
  const query = `${request}?language=${language}&page=${page}`;
  const response = await fetch(`${url}/movie/${query}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: key,
    },
  });
  const body = await response.json();
  return body;
}

export async function searchList(keyword) {
  const query = `query=${keyword}`;
  const response = await fetch(
    `${url}/search/movie?${query}&api_key=23346acd7f707faa560f0cb43b7ceb43`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: key,
      },
    }
  );
  const body = await response.json();
  return body;
}

export const imageUrl = "https://image.tmdb.org/t/p/w500";

export async function genresList() {
  const response = await fetch(`${url}/genre/movie/list?language=ko`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: key,
    },
  });
  const body = await response.json();
  return body;
}
