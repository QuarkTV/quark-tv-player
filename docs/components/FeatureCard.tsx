import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-xl bg-surface border border-white/10 hover:border-brand/50 transition-colors"
    >
      <div className="flex items-start gap-4">
        <span className="text-2xl">{icon}</span>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
          <p className="text-text/80 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
} 