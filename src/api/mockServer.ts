import { Company, FetchCompaniesParams } from "../types/company";

const allCompanies: Company[] = Array.from({ length: 50 }).map((_, i) => ({
  id: (i + 1).toString(),
  name: `Company ${i + 1}`,
  location: ["New York", "California", "Texas"][i % 3],
  industry: ["Technology", "Healthcare", "Finance"][i % 3],
  website: `https://company${i + 1}.com`,
}));

export const fetchCompaniesServer = async ({
  page,
  limit,
  search = "",
  location,
  industry,
  sort = "asc",
}: FetchCompaniesParams) => {
  return new Promise<{ data: Company[]; total: number }>((resolve) => {
    setTimeout(() => {
      let filtered = allCompanies;

      if (search) {
        filtered = filtered.filter((c) =>
          c.name.toLowerCase().includes(search.toLowerCase())
        );
      }
      if (location) {
        filtered = filtered.filter((c) => c.location === location);
      }
      if (industry) {
        filtered = filtered.filter((c) => c.industry === industry);
      }

      filtered.sort((a, b) =>
        sort === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );

      const start = (page - 1) * limit;
      const end = page * limit;
      resolve({ data: filtered.slice(start, end), total: filtered.length });
    }, 500);
  });
};
