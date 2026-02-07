export const formatDate = (isoDate) => {
  const d = new Date(isoDate);

  const formatted = d
    .toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "UTC",
    })
    .replace(",", "")
    .replace(/\//g, ".");

  return formatted;
};
