import axios from "axios";

interface ApiErrorBody {
  message?: string;
  error?: string;
  errors?: Record<string, string[]>; // validation errors per field
}

export function getErrorMessage(
  error: unknown,
  fallback = "Something went wrong. Please try again.",
): string {
  if (axios.isAxiosError<ApiErrorBody>(error)) {
    const data = error.response?.data;
    // API message: { message: "Email already exists" }
    if (data?.message) return data.message;
    if (data?.error) return data.error;
    // Field validation: { errors: { email: ["Invalid email"] } }
    if (data?.errors) {
      const first = Object.values(data.errors).flat()[0];
      if (first) return first;
    }
    // HTTP status fallbacks
    if (error.response?.status === 409) {
      return "An account with this email already exists.";
    }
    if (error.response?.status === 400) {
      return "Please check your details and try again.";
    }
    if (error.response?.status === 500) {
      return "Server error. Please try again later.";
    }
    // Network / no response
    if (!error.response) {
      return "Network error. Check your connection and try again.";
    }
  }
  if (error instanceof Error) return error.message;
  return fallback;
}
