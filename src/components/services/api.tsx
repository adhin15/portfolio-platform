const baseUrl = process.env.NEXT_PUBLIC_BASE_URL + "/api";

export const promptColor = async (payload: any) => {
  const fullUrl = `${baseUrl}/prompt`;
  try {
    const response = await fetch(fullUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const responseData = await response.json();
    return Promise.resolve(responseData);
  } catch (err) {
    return Promise.resolve(err);
  }
};
