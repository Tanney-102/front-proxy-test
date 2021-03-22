console.log("loaded");

document.querySelector("button").addEventListener("click", async () => {
  const res = await fetch("https://localhost:3001/test");
  const text = await res.text();

  console.log(text);
});