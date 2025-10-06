export interface Company {
  id: string;
  name: string;
  location: string;
  industry: string;
  website?: string;
}

export interface CompaniesResponse {
  data: Company[];
  total: number;
}

export interface FetchCompaniesParams {
  page: number;
  limit: number;
  search?: string;
  industry?: string;
  location?: string;
  sort?: "asc" | "desc";
}
