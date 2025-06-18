function decodeName(encoded) {
  return atob(encoded);
}

function checkCode() {
  const code = document.getElementById("codeInput").value.trim();
  const encodedName = guestCodes[code];
  const errorElem = document.getElementById("error");
  const partyInfo = document.getElementById("partyInfo");

  if (encodedName) {
    document.getElementById("guestName").textContent = decodeName(encodedName);
    errorElem.textContent = "";
    partyInfo.classList.remove("hidden");
  } else {
    errorElem.textContent = "Code not found. Please check and try again.";
    partyInfo.classList.add("hidden");
  }
}

document.getElementById("codeInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    checkCode();
  }
});

document.getElementById("codeInput").addEventListener("input", function () {
  document.getElementById("error").textContent = "";
});
