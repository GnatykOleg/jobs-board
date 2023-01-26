const convertDate = (createdAt: string) => {
  const newDate = new Date().toString();
  let currentDate = Date.parse(newDate);
  let days = (currentDate - Date.parse(createdAt)) / 86400000;

  if (Math.round(days) === 0) {
    return `Posted 0 days ago`;
  }

  return `Posted ${Math.round(days)} days ago`;
};

export default convertDate;
