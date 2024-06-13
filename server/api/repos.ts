let repos: any = null;

async function fetchRepos() {
  console.log("feched!");
  repos = await $fetch("https://api.github.com/users/cferreras/repos");
}

// Fetch only every 1h
setInterval(fetchRepos, 60 * 60 * 1000);

export default defineEventHandler(async (event) => {
  if (!repos) {
    fetchRepos();
  }

  return {
    repos,
  };
});
