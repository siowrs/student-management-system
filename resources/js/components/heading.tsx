import { cn } from '@/lib/utils';

export default function Heading({ title, description, className }: { className?: string; title: string; description?: string }) {
    return (
        <div className={cn('mb-4 space-y-2', className)}>
            <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
            {description && <p className="text-muted-foreground text-sm">{description}</p>}
        </div>
    );
}
