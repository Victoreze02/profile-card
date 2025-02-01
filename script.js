function updateUTCTime() {
  const utcElement = document.querySelector(".utc-time");
  const now = new Date();
  utcElement.textContent = `UTC Time: ${now.toUTCString()}`;
}
updateUTCTime();