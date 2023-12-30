import { setLoading, setToken, setLoggedIn } from "../redux/slices/authSlice";
import { toast } from "react-hot-toast";

export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      let response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });
      response = await response.json();
      console.log("LOGIN API RESPONSE............", response);

      if (response.message === "Invalid credentials") {
        throw new Error(response.message);
      }

      toast.success("Login Successful");
      dispatch(setToken(response.token));
      dispatch(setLoggedIn(true));

      localStorage.setItem("token", JSON.stringify(response.token));
      navigate("/");
    } catch (error) {
      console.log("LOGIN API ERROR............", error);
      toast.error("Login Failed");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setLoggedIn(false));
    localStorage.removeItem("token");
    toast.success("Logged Out");
    navigate("/login");
  };
}
