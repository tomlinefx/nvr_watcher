const runUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
const brachUrl = process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL;

const DEFAULT_PORT = 3000;

export const getBaseURL = (options?: { useCommitURL?: boolean }) => {
  const isProd = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

  let url: string | undefined;
  if (isProd) {
    url = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;
  } else if (options?.useCommitURL) {
    url = runUrl;
  } else {
    url = brachUrl;
  }

  return url
    ? `https://${url}`
    : `http://localhost:${process.env.PORT || DEFAULT_PORT}`;
};
