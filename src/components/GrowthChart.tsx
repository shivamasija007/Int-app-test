import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { MonthlyData } from '../utils/calculator';

interface GrowthChartProps {
  data: MonthlyData[];
}

export function GrowthChart({ data }: GrowthChartProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatXAxis = (month: number) => {
    return `Year ${Math.floor(month / 12)}`;
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-navy-700 p-4 rounded-lg shadow-lg border border-navy-600">
          <p className="font-semibold text-navy-100">{formatXAxis(label)}</p>
          <p className="text-green-400">
            Balance: {formatCurrency(payload[0].value)}
          </p>
          <p className="text-blue-300">
            Deposits: {formatCurrency(payload[1].value)}
          </p>
          <p className="text-purple-300">
            Interest: {formatCurrency(payload[2].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-navy-700 rounded-lg shadow-xl p-6 border border-navy-600">
      <h3 className="text-lg font-semibold text-navy-50 mb-4">Growth Chart</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#334f8c" />
            <XAxis
              dataKey="month"
              tickFormatter={formatXAxis}
              interval={Math.floor(data.length / 5)}
              stroke="#8da5d5"
            />
            <YAxis tickFormatter={formatCurrency} stroke="#8da5d5" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area
              type="monotone"
              dataKey="balance"
              name="Total Balance"
              stackId="1"
              stroke="#4ade80"
              fill="#4ade80"
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="deposits"
              name="Total Deposits"
              stackId="2"
              stroke="#60a5fa"
              fill="#60a5fa"
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="interest"
              name="Total Interest"
              stackId="3"
              stroke="#c084fc"
              fill="#c084fc"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}