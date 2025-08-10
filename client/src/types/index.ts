export type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  application_link: string | null;
  created_at: string;
  description: string | null;
  employment_type: string | null;
};