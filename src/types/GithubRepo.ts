export interface IGithubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  forks: number
  open_issues: number
  watchers_count: number
  stargazers_count: number
}

export interface RepoListProps {
  repos: IGithubRepo[]
}