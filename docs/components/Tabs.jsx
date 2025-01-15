'use client'
import { useState } from 'react'

export function Tabs({ children, items }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="my-4">
      <div className="flex space-x-1 border-b border-gray-700 mb-4">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
              activeTab === index
                ? 'text-purple-400 border-b-2 border-purple-400'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      {Array.isArray(children) ? children[activeTab] : children}
    </div>
  )
} 