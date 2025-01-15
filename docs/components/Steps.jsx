export function Steps({ children }) {
  return (
    <div className="steps-container my-8 ml-4 border-l-2 border-gray-700">
      {children}
    </div>
  )
}

export function Step({ children, number }) {
  return (
    <div className="step ml-6 mb-8 relative">
      <div className="absolute -left-[29px] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-gray-800 border border-gray-700">
        <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-gray-900">
          <span className="text-sm font-medium text-gray-300">{number}</span>
        </div>
      </div>
      <div className="pt-2">
        {children}
      </div>
    </div>
  )
} 