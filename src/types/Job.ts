export interface Job {
  id: number;
  type: string;
  title: string;
  description: string;
  location: string;
  salary: string;
  company?: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
}