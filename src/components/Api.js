export async function getList({ language, page }) {
  const query = `language=${language}&page=${page}`;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?${query}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzM0NmFjZDdmNzA3ZmFhNTYwZjBjYjQzYjdjZWI0MyIsInN1YiI6IjY1ZjkyMDhmNGI5YmFlMDE4MzdlN2E0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ssop6XkD3mGVgWcFSPvDwPl8Y2UMV6bIf3fzjkVjSLs",
      },
    }
  );
  const body = await response.json();
  return body;
}
