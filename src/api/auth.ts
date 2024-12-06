import { axios } from "@/api";
import { loginSchema, registerSchema } from "@/schemas/authSchemas";
import { z } from "zod";
import { isAxiosError } from "axios";
import { User } from "@/types/user";

export default {
  registerUser,
  loginUser,
  getUser,
  logout,
};

type ResponseType = Promise<
  | {
      status: "success";
      field?: never;
      message?: never;
    }
  | {
      status: "error";
      field: string;
      message: string;
    }
>;

async function getCSRFCookie() {
  try {
    await axios.get("/api/csrf-cookie");
  } catch (error) {
    console.log(error);
  }
}

async function registerUser(
  values: z.infer<typeof registerSchema>,
  setUser: (user: User | null) => void,
): ResponseType {
  await getCSRFCookie();

  try {
    const res = await axios.post("/register", values);

    setUser(res.data.user);

    return { status: "success" };
  } catch (error) {
    if (!isAxiosError(error))
      return {
        status: "error",
        field: "password_confirmation",
        message: "Възникна грешка. Моля пробвайте отново по - късно.",
      };

    if (error.response?.data.message === "The email has already been taken.") {
      return {
        status: "error",
        field: "email",
        message: "Имейлът вече е зает.",
      };
    }

    return {
      status: "error",
      field: "password_confirmation",
      message: "Има някаква грешка.",
    };
  }
}

async function loginUser(
  values: z.infer<typeof loginSchema>,
  setUser: (user: User | null) => void,
): ResponseType {
  await getCSRFCookie();

  try {
    const res = await axios.post("/login", values);

    setUser(res.data.user);

    return { status: "success" };
  } catch (error) {
    if (!isAxiosError(error))
      return {
        status: "error",
        field: "password",
        message: "Възникна грешка. Моля пробвайте отново по - късно.",
      };

    if (
      error.response?.data.message ===
      "These credentials do not match our records."
    ) {
      return {
        status: "error",
        field: "password",
        message: "Имейлът или паролата не съвпадат.",
      };
    }

    return {
      status: "error",
      field: "password",
      message: "Възникна грешка. Моля пробвайте отново по - късно.",
    };
  }
}

async function logout(setUser: (user: User | null) => void) {
  try {
    await axios.post("/logout");

    setUser(null);
  } catch (error) {
    console.log(error);
  }
}

async function getUser(): Promise<User | null> {
  try {
    const res = await axios.get("/api/user");

    return res.data;
  } catch (error) {
    return null;
  }
}
