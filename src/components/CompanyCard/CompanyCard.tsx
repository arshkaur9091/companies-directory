import React from "react";
import { Company } from "../../types/company";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

interface Props {
  company: Company;
}

const CompanyCard: React.FC<Props> = ({ company }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{company.name}</Typography>
        <Typography variant="body2">
          {company.industry} - {company.location}
        </Typography>
        {company.website && (
          <Link href={company.website} target="_blank" rel="noopener">
            Website
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
