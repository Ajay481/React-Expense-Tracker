export const getApiService = () => {
  return fetch(
    "https://react-https-c449c-default-rtdb.asia-southeast1.firebasedatabase.app//expenses.json",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
