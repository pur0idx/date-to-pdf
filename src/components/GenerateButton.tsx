import { Button } from "@nextui-org/react";
import { Calendar, FileDown } from 'lucide-react';
import React from 'react';

interface GenerateButtonProps {
  onClick: () => void;
  disabled: boolean;
  isGenerating: boolean;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({ onClick, disabled, isGenerating }) => {
  return (
    <Button
      color="primary"
      onClick={onClick}
      isDisabled={disabled}
      isLoading={isGenerating}
      spinner={<Calendar className="animate-spin h-5 w-5" />}
      className="w-full shadow-lg hover:shadow-xl transition-shadow"
      size="lg"
      startContent={!isGenerating && <FileDown className="h-5 w-5" />}
    >
      {isGenerating ? 'สร้าง PDF...' : 'สร้าง PDF'}
    </Button>
  );
};

export default GenerateButton;