
import { Grid, List, LayoutGrid, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export type ViewType = 'cards' | 'grid' | 'list';

interface ViewToggleProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const ViewToggle = ({ currentView, onViewChange }: ViewToggleProps) => {
  const [isExpanded, setIsExpanded] = useState(() => {
    const saved = localStorage.getItem('view-toggle-expanded');
    return saved === 'true';
  });

  const views = [
    { type: 'cards' as ViewType, icon: LayoutGrid, label: 'Cards' },
    { type: 'grid' as ViewType, icon: Grid, label: 'Grid' },
    { type: 'list' as ViewType, icon: List, label: 'List' }
  ];

  const handleExpandToggle = () => {
    const newExpanded = !isExpanded;
    setIsExpanded(newExpanded);
    localStorage.setItem('view-toggle-expanded', newExpanded.toString());
  };

  // If current view is not grid and toggle is collapsed, ensure we show the current view
  const visibleViews = isExpanded 
    ? views 
    : views.filter(view => view.type === 'grid' || view.type === currentView);

  return (
    <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-lg">
      {visibleViews.map(({ type, icon: Icon, label }) => (
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
      
      {!isExpanded && (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleExpandToggle}
          className="flex items-center gap-2"
          title="More view options"
        >
          <MoreHorizontal className="h-4 w-4" />
          <span className="hidden sm:inline">More</span>
        </Button>
      )}
      
      {isExpanded && visibleViews.length > 1 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleExpandToggle}
          className="flex items-center gap-2"
          title="Hide extra options"
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default ViewToggle;
