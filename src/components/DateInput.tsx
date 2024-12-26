import { Card, CardBody, Input, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { Calendar as CalendarIcon } from 'lucide-react';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

interface DateInputProps {
  date: string;
  dayOfWeek: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateInput: React.FC<DateInputProps> = ({ date, dayOfWeek, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleDaySelect = (day: Date | undefined) => {
    if (day) {
      const event = {
        target: {
          value: day.toISOString().split('T')[0]
        }
      } as React.ChangeEvent<HTMLInputElement>;
      
      onChange(event);
      setIsOpen(false);
    }
  };

  const formattedDate = date 
    ? new Date(date).toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      })
    : '';

  return (
    <div className="mb-6 space-y-4">
      <Popover isOpen={isOpen} onOpenChange={setIsOpen} placement="bottom">
        <PopoverTrigger>
          <Input
            label="เลือกวันที่เปิด"
            placeholder="Click to select a date"
            value={formattedDate}
            readOnly
            startContent={
              <CalendarIcon className="h-5 w-5 text-default-400" />
            }
            classNames={{
              input: "text-small",
              label: "text-small font-medium",
              inputWrapper: "hover:shadow-md transition-shadow duration-200",
            }}
          />
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Card shadow="none" className="border-none">
            <DayPicker
              mode="single"
              selected={date ? new Date(date) : undefined}
              onSelect={handleDaySelect}
              className="p-3"
              classNames={{
                day_selected: "bg-primary text-white hover:bg-primary-600",
                day_today: "font-bold text-primary",
              }}
            />
          </Card>
        </PopoverContent>
      </Popover>

      {date && (
        <div className="animate-fadeIn">
          <Card
            className="bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg"
            radius="lg"
          >
            <CardBody className="p-4">
              <div className="text-center text-white">
                <p className="text-2xl font-bold">{dayOfWeek}</p>
                <p className="text-lg opacity-90">
                  {new Date(date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  );
};

export default DateInput;