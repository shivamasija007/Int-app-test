// Financial calculation utilities
export interface MonthlyData {
  month: number;
  balance: number;
  deposits: number;
  interest: number;
}

export function calculateCompoundInterest(
  initialCapital: number,
  annualROI: number,
  monthlyDeposit: number,
  years: number
): number {
  const monthlyRate = annualROI / 100 / 12;
  const totalMonths = years * 12;
  
  let balance = initialCapital;
  
  for (let month = 0; month < totalMonths; month++) {
    // Add monthly deposit
    balance += monthlyDeposit;
    // Apply monthly interest
    balance *= (1 + monthlyRate);
  }
  
  return balance;
}

export function calculateMonthlyData(
  initialCapital: number,
  annualROI: number,
  monthlyDeposit: number,
  years: number
): MonthlyData[] {
  const monthlyRate = annualROI / 100 / 12;
  const totalMonths = years * 12;
  const data: MonthlyData[] = [];
  
  let balance = initialCapital;
  let totalDeposits = initialCapital;
  
  for (let month = 0; month <= totalMonths; month++) {
    if (month > 0) {
      // Add monthly deposit
      balance += monthlyDeposit;
      totalDeposits += monthlyDeposit;
      // Apply monthly interest
      const newBalance = balance * (1 + monthlyRate);
      const monthlyInterest = newBalance - balance;
      balance = newBalance;
      
      data.push({
        month,
        balance,
        deposits: totalDeposits,
        interest: balance - totalDeposits
      });
    } else {
      data.push({
        month,
        balance,
        deposits: totalDeposits,
        interest: 0
      });
    }
  }
  
  return data;
}