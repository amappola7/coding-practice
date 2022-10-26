// Let's Recycle!

// Solution v.1.0
function recycle(array) {
  const output = [];
  const arrayMaterials = ["paper", "glass", "organic", "plastic"];

  arrayMaterials.forEach(material => {
    const recycleBin = array.filter(element => element.material === material || element.secondMaterial === material);

    output.push(recycleBin.map(element => element.type));
  })

  return output;
}

// Test Cases
const input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

recycle(input);

// Expected output
// output = [
//   ["wine bottle", "amazon box", "beer bottle"],
//   ["wine bottle", "beer bottle"],
//   ["rotten apples", "out of date yogurt"],
//   ["out of date yogurt"]
// ]