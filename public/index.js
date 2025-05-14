const wordInput = document.getElementById("demo");
let countDisplay = document.getElementById("wordCount");
let counter =  document.getElementById('withoutSpace');
let graph  = document.getElementById("paragraph");

wordInput.addEventListener("input", () => {
  const text = wordInput.value;
  const words = text;
  countDisplay.textContent = words.length;
 counter.innerHTML = words.trim().length;
 graph.innerHTML = words.trim().split(/\n\n|\r\n\r\n/).length;
});


