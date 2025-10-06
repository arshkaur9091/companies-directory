import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { fetchCompaniesServer } from "./mockServer";
import { CompaniesResponse, FetchCompaniesParams } from "../types/company";

export const useCompanies = (params: FetchCompaniesParams) => {
  return useQuery<CompaniesResponse, Error>({
    queryKey: ["companies", params],
    queryFn: () => fetchCompaniesServer(params),
    keepPreviousData: true,
  } as UseQueryOptions<CompaniesResponse, Error>);
};
