export const fetchProjects = async (offset = null) => {
  try {
    const config = useRuntimeConfig();
    const options = {
      headers: {
        Authorization: `Bearer ${config.API_KEY}`,
      },
    };
    const offSet = offset ? `offset=${offset}` : "";
    const url = `https://api.airtable.com/v0/${config.BASE_ID}/Portfolio?view=Grid%20view&${offSet}`;
    const response = await $fetch(url, options);
    if (response?.offset) {
      const nextResponse = await fetchProjects(response.offset);
      return [...response.records, ...nextResponse];
    }
    return response.records;
  } catch (error) {
    console.log(error);
  }
};
