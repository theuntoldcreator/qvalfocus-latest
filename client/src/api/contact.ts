import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  role?: string;
  help: string;
  website?: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  const response = await apiRequest("POST", "/api/contact", data);
  return response.json();
};