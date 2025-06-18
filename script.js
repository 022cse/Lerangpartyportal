function checkCode() {
  const code = document.getElementById("codeInput").value.trim();
  const name = guestCodes[code];
  const errorElem = document.getElementById("error");
  const partyInfo = document.getElementById("partyInfo");

  if (name) {
    document.getElementById("guestName").textContent = name;
    errorElem.textContent = "";
    partyInfo.classList.remove("hidden");
  } else {
    errorElem.textContent = "Code not found. Please check and try again.";
    partyInfo.classList.add("hidden");
  }
}