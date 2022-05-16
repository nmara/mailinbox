const shortDateConfig = { month: "long", day: "numeric" };
const longDateConfig = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const formatDate = (dateString, options) => {
  const formattedString = dateString.split(" ").join("T");
  const date = new Date(formattedString);
  return date.toLocaleDateString("pl-PL", options);
};

export const getShortDate = (dateString) =>
  formatDate(dateString, shortDateConfig);

export const getLongDate = (dateString) =>
  formatDate(dateString, longDateConfig);
