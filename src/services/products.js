import { setLoading } from "../redux/slices/authSlice";
import { toast } from "react-hot-toast";
export function allProducts(setData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      let response = await fetch("https://dummyjson.com/products?limit=1000");
      response = await response.json();
      console.log("Product API RESPONSE............", response);
      await setData(response.products);
    } catch (error) {
      console.log("Product API ERROR............", error);
      toast.error("Login Failed");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

// export function basedOnName(name, setData) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...");
//     dispatch(setLoading(true));
//     try {
//       let response = await fetch(
//         `https://dummyjson.com/products/search?q=${name}`
//       );
//       response = await response.json();
//       await setData(response.products);

//       console.log("Product API RESPONSE............", response);
//     } catch (error) {
//       console.log("Product API ERROR............", error);
//       toast.error("Login Failed");
//     }
//     dispatch(setLoading(false));
//     toast.dismiss(toastId);
//   };
// }
