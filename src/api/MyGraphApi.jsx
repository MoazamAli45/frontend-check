import { useMutation } from "react-query";
import { useAuthContext } from "../../context/AuthContext";
import { API_BASE_URL } from "./api";

export const useGetGraphData = () => {
  const { jwt } = useAuthContext();

  const getGraphData = async () => {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/admin/incomeStatement`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error in Getting Income Statement");
    }

    return await response.json();
  };

  const {
    mutateAsync: getData,
    isLoading,
    isSuccess,
    error,
  } = useMutation(getGraphData);

  return { getData, isLoading, isSuccess, error };
};
