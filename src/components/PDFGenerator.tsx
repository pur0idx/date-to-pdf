import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Calendar } from "lucide-react";
import React, { useState } from "react";
import { generatePDF } from "../utils/pdfUtils";
import DateInput from "./DateInput";
import GenerateButton from "./GenerateButton";
import PDFPreview from "./PDFPreview";
import PDFTemplate from "./PDFTemplate";

const PDFGenerator: React.FC = () => {
  const [date, setDate] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGeneratePDF = async () => {
    setIsGenerating(true);
    try {
      await generatePDF("pdf-content", "document.pdf");
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    const dateObj = new Date(selectedDate);
    dateObj.setDate(dateObj.getDate() + 1);

    // Format the date back to YYYY-MM-DD format for the input
    const adjustedDate = dateObj.toISOString().split("T")[0];
    setDate(adjustedDate);

    const day = dateObj.toLocaleDateString("en-US", {
      weekday: "long",
    });
    setDayOfWeek(day);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 font-ibm-th">
      <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto">
        <div className="flex-1">
          <Card className="shadow-xl">
            <CardHeader className="flex gap-3 px-6 pt-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">สร้าง PDF ใบปิดร้าน</h2>
                <p className="text-sm text-default-500">
                  เลือกวันที่ต้องการ และสร้างไฟล์ PDF
                </p>
              </div>
            </CardHeader>
            <Divider className="my-4" />
            <CardBody className="px-6 pb-6">
              <DateInput
                date={date}
                dayOfWeek={dayOfWeek}
                onChange={handleDateChange}
              />

              <Divider className="my-6" />
              <GenerateButton
                onClick={handleGeneratePDF}
                disabled={!date || isGenerating}
                isGenerating={isGenerating}
              />
            </CardBody>
          </Card>
        </div>

        {/* Preview Section */}
        <div className="lg:w-[300px] xl:w-[400px]">
          <div className="sticky top-4">
            <PDFPreview date={date} dayOfWeek={dayOfWeek} />
          </div>
        </div>
      </div>

      <div id="pdf-content" className="hidden">
        <PDFTemplate date={date} dayOfWeek={dayOfWeek} isPDF={true} />
      </div>
    </div>
  );
};

export default PDFGenerator;
