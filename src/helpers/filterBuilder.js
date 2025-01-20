export const filterBuilder = (filter) => {
  let query = `?limit=4&page=${filter.page}`;

  if (filter.location) {
    query += `&location=${filter.location}`;
  }

  filter.equipment.forEach((i) => {
    query += `&${i}=true`;
  });

  if (filter.type) {
    query += `&form=${filter.type}`;
  }

  return query;
};
