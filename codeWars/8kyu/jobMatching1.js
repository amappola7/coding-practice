// Job Matching #1

// Solution v.2.0.
function match(candidate, job) {
  let candidateMinSalary = candidate.minSalary - (candidate.minSalary * 0.1);

  if (typeof candidate.minSalary !== "number" || typeof job.maxSalary !== "number") {
    throw new TypeError("Missing Values");
  }

  return candidateMinSalary <= job.maxSalary
}

// Test Cases
let candidateInput = {
  minSalary: 120000
}

let jobInput = {
  maxSalary: 140000
}

match(candidateInput, jobInput);