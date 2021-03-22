console.log("loaded");

document.querySelector("button").addEventListener("click", async () => {
  const res = await fetch("http://localhost:3001/test");
  const text = await res.text();

  console.log(text);
});