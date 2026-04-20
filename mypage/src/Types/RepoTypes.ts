

export interface Repo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  open_issues_count: number;
  updated_at: string;
  languages: string[];
}
export interface RepoMeta {
  page: number;
  per_page: number;
  total: number;
  has_more: boolean;
}

export interface RepoResponse {
  success: boolean;
  result: Repo[];
  meta: RepoMeta
}