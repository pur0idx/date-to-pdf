import { Card, CardBody } from "@nextui-org/react";
import { Eye } from 'lucide-react';
import React from 'react';
import PDFTemplate from './PDFTemplate';

interface PDFPreviewProps {
  date: string;
  dayOfWeek: string;
}

const PDFPreview: React.FC<PDFPreviewProps> = ({ date, dayOfWeek }) => {
  if (!date) return null;

  return (
    <div className="animate-fadeIn">
      <Card className="bg-default-50">
        <CardBody className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Eye className="w-4 h-4 text-default-500" />
            <h3 className="text-sm font-medium text-default-700">Preview</h3>
          </div>
          <div className="border rounded-lg overflow-hidden bg-white shadow-inner">
            <div className="relative w-full" style={{ paddingTop: '70.66%' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div style={{ 
                  transform: 'scale(0.3)',
                  transformOrigin: 'center',
                  width: '842px',
                  height: '595px'
                }}>
                  <PDFTemplate date={date} dayOfWeek={dayOfWeek} />
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-default-500 mt-3 text-center">
            Preview of your PDF
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default PDFPreview; 