export function calculateAge(day, month, year) {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths -= 1;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (ageMonths < 0) {
    ageYears -= 1;
    ageMonths += 12;
  }

  return { years: ageYears, months: ageMonths, days: ageDays };
}
