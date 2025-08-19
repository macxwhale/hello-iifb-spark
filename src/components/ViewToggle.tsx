
import { Grid, List, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type ViewType = 'cards' | 'grid' | 'list';

interface ViewToggleProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const ViewToggle = ({ currentView, onViewChange }: ViewToggleProps) => {
  const views = [
    { type: 'cards' as ViewType, icon: LayoutGrid, label: 'Cards' },
    { type: 'grid' as ViewType, icon: Grid, label: 'Grid' },
    { type: 'list' as ViewType, icon: List, label: 'List' }
  ];

  return (
    <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-lg">
      {views.map(({ type, icon: Icon, label }) => (
        <Button
          key={type}
          variant={currentView === type ? "secondary" : "ghost"}
          size="sm"
          onClick={() => onViewChange(type)}
          className="flex items-center gap-2"
        >
          <Icon className="h-4 w-4" />
          <span className="hidden sm:inline">{label}</span>
        </Button>
      ))}
    </div>
  );
};

export default ViewToggle;
