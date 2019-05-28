export function formatDate(timestamp) {
  let date = new Date(parseInt(timestamp));
  return date.toDateString();
}

function formatTime(dateTime) {
  let minutes = dateTime.getMinutes() === 0 ? '00' : dateTime.getMinutes();
  return dateTime.getHours() > 12
    ? `${dateTime.getHours() - 12}.${minutes}PM`
    : `${dateTime.getHours()}.${minutes}AM`;
}

export function formatDuration(timestamp, duration){
  let startDate = new Date(parseInt(timestamp));
  let endDateTime = new Date(parseInt(timestamp) + parseInt(duration));


  return `${formatTime(startDate)} to ${formatTime(endDateTime)}`;
}
