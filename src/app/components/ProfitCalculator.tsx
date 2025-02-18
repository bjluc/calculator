'use client'

import React, { useState } from 'react'

const ProfitCalculator = () => {
  const [totalRevenue, setTotalRevenue] = useState('')

  const accounts = [
    { name: 'Saving', percentage: 5, color: 'bg-green-500' },
    { name: "Owner's Pay", percentage: 45, color: 'bg-blue-500' },
    { name: 'Operating Expenses', percentage: 15, color: 'bg-purple-500' },
    { name: 'Tax', percentage: 25, color: 'bg-red-500' },
    { name: 'Car Expense', percentage: 10, color: 'bg-yellow-500' },
  ]

  const calculateAmount = (percentage: number) => {
    if (!totalRevenue) return 0
    return (parseFloat(totalRevenue) * (percentage / 100)).toFixed(2)
  }

  const calculateSplitAmount = () => {
    if (!totalRevenue) return 0
    const ownersPay = accounts.find((a) => a.name === "Owner's Pay")
    const otherAccountsPercentage = 100 - (ownersPay?.percentage || 0)
    return (parseFloat(totalRevenue) * (otherAccountsPercentage / 100)).toFixed(
      2
    )
  }

  return (
    <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg'>
        <h1 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
          Profit First Calculator
        </h1>

        <div className='mb-6'>
          <label className='block text-gray-900 text-sm font-bold mb-2'>
            Total Revenue
          </label>
          <div className='relative'>
            <span className='absolute left-3 top-2 text-gray-600'>£</span>
            <input
              type='text'
              value={totalRevenue}
              onChange={(e) => setTotalRevenue(e.target.value)}
              className='w-full pl-8 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 caret-gray-900'
              placeholder='Enter total revenue'
              inputMode='decimal'
              pattern='[0-9]*'
            />
          </div>
        </div>

        <div className='space-y-4'>
          {accounts.map((account) => (
            <div
              key={account.name}
              className={`p-4 rounded-lg shadow ${account.color} transition-transform hover:scale-105`}
            >
              <div className='flex justify-between items-center'>
                <h3 className='font-semibold text-white'>{account.name}</h3>
                <div className='text-white'>
                  <span className='text-sm'>{account.percentage}%</span>
                  <span className='ml-2 font-bold'>
                    £{calculateAmount(account.percentage)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-6 p-4 bg-gray-200 rounded-lg'>
          <h3 className='font-bold text-gray-800'>
            Split Amount (excl. Owner's Pay)
          </h3>
          <p className='text-xl font-bold text-gray-900'>
            £{calculateSplitAmount()}
          </p>
        </div>

        <div className='mt-6 text-sm text-gray-600'>
          <p className='font-medium'>Based on Profit First methodology:</p>
          <ul className='list-disc ml-5 mt-2 space-y-1'>
            {accounts.map((account) => (
              <li key={account.name}>
                {account.name}: {account.percentage}%
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfitCalculator
