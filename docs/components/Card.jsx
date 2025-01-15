'use client'
import Link from 'next/link'

export function Card({ title, description, icon, href, children }) {
  const content = description || children

  return (
    <Link 
      href={href} 
      className="block p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors"
    >
      <div className="flex items-center gap-4 mb-2">
        {icon && <span className="text-2xl">{icon}</span>}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      {content && (
        <div className="prose prose-invert max-w-none">
          {content}
        </div>
      )}
    </Link>
  )
}

export function Cards({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      {children}
    </div>
  )
} 