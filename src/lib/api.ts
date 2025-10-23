import { CleanResponse } from "@/types/schemas";
import axios from "axios";

export async function getAiResponse(message: string): Promise<CleanResponse> {
  try {
    const response = await axios.post<CleanResponse>(
      "https://cognitive-web-support-backend.onrender.com",
      {
        query: message,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching or parsing AI Response", error);
    if (axios.isAxiosError(error) && error.response) {
      const apiErrorMessage =
        error.response.data?.message || "An unknown API Error occurred";
      throw new Error(apiErrorMessage);
    }
    throw error;
  }
}
