/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = '';

if (isGithubActions) {
  const fullRepo = process.env.GITHUB_REPOSITORY || ''; // e.g. "hamzahubb/CDMSD.github.io"
  const [owner, repoName] = fullRepo.split('/');
  
  // Only a repo named exactly "<owner>.github.io" is at root "/".
  // Any other repo (including "CDMSD.github.io") is served at "/<repoName>/".
  if (owner && repoName && repoName.toLowerCase() !== `${owner.toLowerCase()}.github.io`) {
    repo = `/${repoName}`;
  }
}

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || repo,
};

export default nextConfig;
