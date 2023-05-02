export function formatRemainingTime(timeInSeconds: number | null) {
  if (timeInSeconds === null || timeInSeconds < 0) {
    return '-00:00';
  }

  const seconds = Math.floor(timeInSeconds % 60);
  const minutes = Math.floor((timeInSeconds / 60) % 60);
  const hours = Math.floor(timeInSeconds / 3600);

  const formattedSeconds = seconds.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  if (hours > 0) {
    const formattedHours = hours.toString().padStart(2, '0');
    return `-${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  } else {
    return `-${formattedMinutes}:${formattedSeconds}`;
  }
}

export function calculatePercentage(value: number, total: number): number {
  return (value / total) * 100;
}
