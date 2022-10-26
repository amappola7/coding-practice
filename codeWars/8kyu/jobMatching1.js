// Solution v.1.0.
function match(candidate, job) {
  // Calculate deduction from candidate's minimum salary
  let candidateMinSalary = candidate.minSalary - (candidate.minSalary * 0.1);

  // Matching candidate with job
  if (typeof candidate.minSalary !== "number" || typeof job.maxSalary !== "number") {
    throw new TypeError("Missing Values");
  } else if (candidateMinSalary <= job.maxSalary) {
    return true
  } else if (candidateMinSalary > job.maxSalary) {
    return false
  }
}

// Test Cases
let candidateInput = {
  minSalary: 120000
}

let jobInput = {
  maxSalary: 140000
}

match(candidateInput, jobInput);