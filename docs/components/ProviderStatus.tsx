interface ProviderStatusProps {
  name: string;
  status: 'available' | 'coming-soon' | 'beta';
  description: string;
  date?: string;
}

export function ProviderStatus({ name, status, description, date }: ProviderStatusProps) {
  const getBadgeColor = () => {
    switch (status) {
      case 'available':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'coming-soon':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'beta':
        return 'bg-brand/10 text-brand border-brand/20';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'available':
        return 'Disponible';
      case 'coming-soon':
        return 'Próximamente';
      case 'beta':
        return 'Beta';
    }
  };

  return (
    <div className="p-4 rounded-lg bg-surface/50 border border-white/10">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-white">{name}</h3>
        <span className={`px-2 py-0.5 text-xs rounded-full border ${getBadgeColor()}`}>
          {getStatusText()}
        </span>
      </div>
      <p className="text-sm text-text/70">{description}</p>
      {date && (
        <p className="mt-2 text-xs text-text/50">
          Fecha estimada: {date}
        </p>
      )}
    </div>
  );
} 