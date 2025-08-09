import { apiRequest } from "@/lib/queryClient";

interface NewsletterFormData {
  email: string;
}

export const subscribeToNewsletter = async (data: NewsletterFormData) => {
  const response = await apiRequest("POST", "/api/newsletter", data);
  return response.json();
};