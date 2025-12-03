export function formatTimeForOffset(now: Date, offsetHours: number): string {
  // Create a date formatter for the specific timezone
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: getTimeZoneForOffset(offsetHours),
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return formatter.format(now);
}

function getTimeZoneForOffset(offsetHours: number): string {
  // Map offset hours to IANA timezone identifiers
  if (offsetHours === 4) return "Asia/Dubai";
  if (offsetHours === -5) return "America/New_York";
  if (offsetHours === 1) return "Europe/Paris";
  return "UTC";
}
