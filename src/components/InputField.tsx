import React from 'react';

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
}

export function InputField({
  label,
  value,
  onChange,
  min = 0,
  step = 1,
  prefix,
  suffix
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-navy-200 mb-1">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        {prefix && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-navy-300 sm:text-sm">{prefix}</span>
          </div>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          min={min}
          step={step}
          className={`block w-full rounded-md border-navy-600 bg-navy-800 text-navy-100
            focus:border-navy-400 focus:ring-navy-400 sm:text-sm
            ${prefix ? 'pl-7' : 'pl-3'}
            ${suffix ? 'pr-12' : 'pr-3'}
            shadow-sm`}
        />
        {suffix && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-navy-300 sm:text-sm">{suffix}</span>
          </div>
        )}
      </div>
    </div>
  );
}