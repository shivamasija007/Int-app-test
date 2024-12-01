import React from 'react';

interface ResultCardProps {
  finalBalance: number;
  totalDeposits: number;
  totalInterest: number;
}

export function ResultCard({ finalBalance, totalDeposits, totalInterest }: ResultCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="bg-navy-700 rounded-lg shadow-xl p-6 border border-navy-600">
      <h3 className="text-lg font-semibold text-navy-50 mb-4">Results</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-navy-200">Final Balance:</span>
          <span className="text-xl font-bold text-green-400">{formatCurrency(finalBalance)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-navy-200">Total Deposits:</span>
          <span className="text-navy-100">{formatCurrency(totalDeposits)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-navy-200">Total Interest Earned:</span>
          <span className="text-blue-300 font-semibold">{formatCurrency(totalInterest)}</span>
        </div>
      </div>
    </div>
  );
}