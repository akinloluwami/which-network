const mtnPrefixes = [
  "0803",
  "0806",
  "0814",
  "0810",
  "0813",
  "0814",
  "0816",
  "0703",
  "0706",
  "0903",
  "0906",
];

const nineMobilePrefixes = ["0809", "0817", "0818", "0908", "0909"];

const airtelPrefixes = [
  "0802",
  "0808",
  "0812",
  "0708",
  "0701",
  "0902",
  "0901",
  "0907",
];

const gloPrefixes = ["0805", "0815", "0811", "0705", "0905"];

function whichNetwork(phoneNumber) {
  const prefix = phoneNumber.substring(0, 4);
  if (mtnPrefixes.includes(prefix)) {
    return "MTN";
  } else if (nineMobilePrefixes.includes(prefix)) {
    return "9mobile";
  } else if (airtelPrefixes.includes(prefix)) {
    return "Airtel";
  } else if (gloPrefixes.includes(prefix)) {
    return "Glo";
  } else {
    return "unknown";
  }
}
