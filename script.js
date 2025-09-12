function fetchGreeting() {
  fetch("/api/greeting")
    .then(res => res.json())
    .then(data => {
      document.getElementById("msg").innerText = `${data.message} — ${new Date(data.time).toLocaleString()}`;
    })
    .catch(err => {
      document.getElementById("msg").innerText = "Error fetching greeting!";
    });
}
