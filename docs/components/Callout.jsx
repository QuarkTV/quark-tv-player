const styles = {
  note: {
    container: 'bg-blue-900/20 border-blue-500',
    title: 'text-blue-400',
  },
  warning: {
    container: 'bg-yellow-900/20 border-yellow-500',
    title: 'text-yellow-400',
  },
  error: {
    container: 'bg-red-900/20 border-red-500',
    title: 'text-red-400',
  },
  tip: {
    container: 'bg-green-900/20 border-green-500',
    title: 'text-green-400',
  }
}

export function Callout({ 
  children, 
  type = 'note',
  title,
  emoji
}) {
  return (
    <div className={`p-4 my-6 border-l-4 rounded-r-lg ${styles[type].container}`}>
      {(title || emoji) && (
        <div className="flex items-center gap-2 mb-2">
          {emoji && <span className="text-xl">{emoji}</span>}
          {title && <span className={`font-medium ${styles[type].title}`}>{title}</span>}
        </div>
      )}
      <div className="text-gray-300">
        {children}
      </div>
    </div>
  )
} 