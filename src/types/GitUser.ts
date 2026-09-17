export interface IUser {
  login: string
  id: number
  avatar_url: string
  html_url: string
  type: string

  name: string | null
  location: string | null
  bio: string | null
  blog: string
  twitter_username: string | null

  followers: number
  following: number
  public_repos: number
  public_gists: number
  hireable: boolean | null
}

export interface IGithubUser {
  avatar_url: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
  user_view_type: string
}