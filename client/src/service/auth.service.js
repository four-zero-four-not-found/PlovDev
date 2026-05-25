import { BASE_HEADERS, BASE_URL ,API_URL} from "../config/api.config";


// GOOGLE LOGIN OR SIGN UP
export const handleGoogleLoginOrSignup = async () => {
  window.location.href = `${BASE_URL}/auth/google`;
};

// REFRESH TOKEN
export const handleRefreshToken = async () => {
  try {
    const res = await fetch(`${BASE_URL}/auth/refreshtoken`, {
      method: "POST",
      credentials: "include",
      headers: BASE_HEADERS,
    });
    if (!res.ok) {
      throw new Error("Failed to refresh token");
    }
    const data = await res.json();

    return data.accessToken ?? [];
  } catch (error) {
    throw new Error(error.message);
  }
};

// SIGN UP
export const SignUp = async ({ fullName, email, password }) => {
  try {
    let userData = {
      fullName,
      email,
      password,
    };
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: BASE_HEADERS,
      body: JSON.stringify(userData),
    });

    if (!res.ok) {
      throw new Error("Failed to sign up");
    }
    const data = await res.json();

    console.log("sign up data:", data);
    return data ?? [];
  } catch (error) {
    throw new Error(error.message);
  }
};

// LOGIN
export const LogIn = async ({ email, password }) => {
  try {
    let userData = {
      email,
      password,
    };
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: BASE_HEADERS,
      body: JSON.stringify(userData),
    });
    const data = await res.json();

    console.log("data after login", data);

    return data ?? [];
  } catch (error) {
    throw new Error(error.message);
  }
};

// VERIFY OTP CODE
export const verifyOtpCode = async ({ userId, code }) => {
  let userData = {
    userId,
    code,
  };
  try {
    const res = await fetch(`${BASE_URL}/auth/verify-otp`, {
      method: "POST",
      credentials: "include",
      headers: BASE_HEADERS,
      body: JSON.stringify(userData),
    });

    const data = await res.json();

    return data ?? [];
  } catch (error) {
    throw new Error(error.message);
  }
};

// FORGOT PASSWORD

export const forgotPassword = async (email) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/forgot-password`, {
      method: "POST",
      headers: BASE_HEADERS,
      body: JSON.stringify({ email }),
    });
    const data = await res.json();

    return data ?? [];
  } catch (error) {
    throw new Error(error.message);
  }
};

// VERIFY FORGOT OTP
export const verifyForgotOtp = async ({ userId, code }) => {
  let userData = {
    userId,
    code,
  };
  try {
    const res = await fetch(`${BASE_URL}/auth/verify-forgot-otp`, {
      method: "POST",
      credentials: "include",
      headers: BASE_HEADERS,
      body: JSON.stringify(userData),
    });
    const data = await res.json();

    return data ?? [];
  } catch (error) {
    throw new Error(error.message);
  }
};

// RESET PASSWORD
export const ResetPasswordFunc = async (newPassword) => {
  let userData = {
    newPassword,
  };
  try {
    const res = await fetch(`${BASE_URL}/auth/reset-password`, {
      method: "POST",
      credentials: "include",
      headers: BASE_HEADERS,
      body: JSON.stringify(userData),
    });
    const data = await res.json();

    return data ?? [];
  } catch (error) {
    throw new Error(error.message);
  }
};
// LOGOUT
export const logOut = async () => {
  try {
    const res = await fetch(`${BASE_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
      headers: BASE_HEADERS,
    });

    if (!res.ok) {
      throw new Error("logout failed!");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
