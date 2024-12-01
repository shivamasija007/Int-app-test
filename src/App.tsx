import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { InputField } from './components/InputField';
import { ResultCard } from './components/ResultCard';
import { GrowthChart } from './components/GrowthChart';
import { calculateCompoundInterest, calculateMonthlyData } from './utils/calculator';

function App() {
  const [initialCapital, setInitialCapital] = useState(10000);
  const [annualROI, setAnnualROI] = useState(7);
  const [monthlyDeposit, setMonthlyDeposit] = useState(500);
  const [years, setYears] = useState(10);

  const finalBalance = calculateCompoundInterest(
    initialCapital,
    annualROI,
    monthlyDeposit,
    years
  );

  const totalDeposits = initialCapital + (monthlyDeposit * years * 12);
  const totalInterest = finalBalance - totalDeposits;

  const monthlyData = calculateMonthlyData(
    initialCapital,
    annualROI,
    monthlyDeposit,
    years
  );

  return (
    <div className="min-h-screen bg-navy-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Calculator className="mx-auto h-12 w-12 text-navy-200" />
          <h2 className="mt-4 text-3xl font-bold text-navy-50">
            Investment Calculator
          </h2>
          <p className="mt-2 text-navy-200">
            Calculate your investment growth with compound interest
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-navy-700 rounded-lg shadow-xl p-6 mb-6 border border-navy-600">
              <InputField
                label="Initial Capital"
                value={initialCapital}
                onChange={setInitialCapital}
                prefix="$"
                step={100}
              />
              
              <InputField
                label="Annual Return (ROI)"
                value={annualROI}
                onChange={setAnnualROI}
                suffix="%"
                step={0.1}
              />
              
              <InputField
                label="Monthly Deposit"
                value={monthlyDeposit}
                onChange={setMonthlyDeposit}
                prefix="$"
                step={50}
              />
              
              <InputField
                label="Investment Period"
                value={years}
                onChange={setYears}
                suffix="years"
                min={1}
                step={1}
              />
            </div>

            <ResultCard
              finalBalance={finalBalance}
              totalDeposits={totalDeposits}
              totalInterest={totalInterest}
            />
          </div>

          <div className="lg:col-span-2">
            <GrowthChart data={monthlyData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;