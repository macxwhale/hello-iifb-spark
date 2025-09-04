import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FileText, X, ExternalLink } from 'lucide-react';

interface PDFViewerProps {
  title: string;
  pdfUrl: string;
  trigger?: React.ReactNode;
}

const PDFViewer = ({ title, pdfUrl, trigger }: PDFViewerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultTrigger = (
    <Button className="bg-secondary text-white hover:bg-secondary-hover">
      <FileText className="h-4 w-4 mr-2" />
      View PDF
    </Button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-full h-[90vh] p-0">
        <DialogHeader className="p-6 pb-2">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold pr-8">{title}</DialogTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(pdfUrl, '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Open External
              </Button>
            </div>
          </div>
        </DialogHeader>
        <div className="flex-1 px-6 pb-6">
          <div className="w-full h-full border rounded-lg overflow-hidden">
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
              className="w-full h-full"
              title={title}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PDFViewer;