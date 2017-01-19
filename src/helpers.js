export function durationDisplay(millisec) {
  var minutes = Math.floor(millisec / 60000);
  var seconds = ((millisec % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}