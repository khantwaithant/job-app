export interface Job {
  id: string;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  company: Company;
}

export interface Company {
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
}

export interface JobSubmitHandler {
  (jobData: Job): void;
}

export interface DeleteJobHandler {
  (id: string): void;
}

export interface HomeCardProps {
  title: string;
  description: string;
  link: string;
  btnName: string;
  btnColor?: string;
  cardColor?: string;
  btnHoverColor?: string;
}
