import axios from "axios";

export const getCoinData = async (id, setError) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
    
    // Optional: Validate important fields exist before returning
    if (
      response?.data?.id &&
      response?.data?.market_data &&
      response?.data?.description &&
      response?.data?.image
    ) {
      return response.data;
    } else {
      console.warn("Received incomplete coin data:", response.data);
      if (setError) setError(true);
      return null;
    }

  } catch (error) {
    console.error("ERROR fetching coin data:", error);
    if (setError) setError(true);
    return null;
  }
};
