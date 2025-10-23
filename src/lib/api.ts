import { CleanResponse } from "@/types/schemas";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_AI_API_URL;
export async function getAiResponse(message: string): Promise<CleanResponse> {
  try {
    const response = await axios.post<CleanResponse>(
      `${API_URL}/api/query`,
      {
        query: message,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": process.env.NEXT_PUBLIC_API_KEY || "",
        },
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
