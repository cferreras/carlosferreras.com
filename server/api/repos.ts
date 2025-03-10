// Define an interface for GitHub repository data
interface GitHubRepo {
  name: string;
  description: string | null;
  stargazers_count: number;
  // Replace the any type with more specific types for common GitHub API properties
  [key: string]: string | number | boolean | null | undefined | object | Array<unknown>;
}

let repos: GitHubRepo[] | null = null;
let lastFetch: number = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

async function fetchRepos() {
  console.log("fetched!");
  repos = await $fetch("https://api.github.com/users/cferreras/repos");
  lastFetch = Date.now();
}

export default defineEventHandler(async (event) => {
  // Get the repo URL from query parameters
  const query = getQuery(event);
  const repoUrl = query.url as string;

  // Fetch repos if they haven't been fetched yet or cache has expired
  if (!repos || Date.now() - lastFetch > CACHE_DURATION) {
    await fetchRepos();
  }

  // If no repo URL provided, return all repos
  if (!repoUrl) {
    return { repos };
  }

  // Extract owner and repo name from URL
  // Example: https://github.com/cferreras/repo-name
  try {
    const urlParts = repoUrl.split('/');
    const repoName = urlParts[urlParts.length - 1];
    
    // Find the repo in our cached data
    const repoData = repos?.find((repo) => repo.name === repoName);
    
    if (repoData) {
      return {
        stars: repoData.stargazers_count,
        name: repoData.name,
        description: repoData.description
      };
    } else {
      return {
        error: "Repository not found",
        stars: 0
      };
    }
  } catch {
    // Removed the unused variable
    return {
      error: "Invalid repository URL",
      stars: 0
    };
  }
});
