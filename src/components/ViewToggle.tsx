

import { Grid, List, LayoutGrid, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export type ViewType = 'cards' | 'grid' | 'list';

interface ViewToggleProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const ViewToggle = ({ currentView, onViewChange }: ViewToggleProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Load expanded state from localStorage on component mount
  useEffect(() => {
    const savedExpandedState = localStorage.getItem('view-toggle-expanded');
    if (savedExpandedState === 'true') {
      setIsExpanded(true);
    }
  }, []);

  const handleExpandToggle = () => {
    const newExpandedState = !isExpanded;
    setIsExpanded(newExpandedState);
    localStorage.setItem('view-toggle-expanded', newExpandedState.toString());
  };

  const views = [
    { type: 'cards' as ViewType, icon: LayoutGrid, label: 'Cards' },
    { type: 'grid' as ViewType, icon: Grid, label: 'Grid' },
    { type: 'list' as ViewType, icon: List, label: 'List' }
  ];

  const visibleViews = isExpanded ? views : views.filter(view => view.type === 'grid');

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
      
      <Button
        variant="ghost"
        size="sm"
        onClick={handleExpandToggle}
        className="flex items-center gap-1 ml-1"
        title={isExpanded ? "Show fewer options" : "Show more view options"}
      >
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ViewToggle;

