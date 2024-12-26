import React from "react";
// import fbQR from "../assets/fb.png";
// import lineQR from "../assets/line.png";

interface PDFTemplateProps {
  date: string;
  dayOfWeek: string;
}

type EnglishDay =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

interface DayMapping {
  [key: string]: string;
}

function convertDayToThai(englishDay: string): string {
  const day = englishDay.toLowerCase();

  const dayMapping: DayMapping = {
    monday: "วันจันทร์",
    tuesday: "วันอังคาร",
    wednesday: "วันพุธ",
    thursday: "วันพฤหัสบดี",
    friday: "วันศุกร์",
    saturday: "วันเสาร์",
    sunday: "วันอาทิตย์",
  };

  return dayMapping[day] || englishDay;
}

const PDFTemplate: React.FC<PDFTemplateProps> = ({ date, dayOfWeek }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
  });

  const thaiDay = convertDayToThai(dayOfWeek);

  return (
    <div className="w-[842px] h-[595px] flex items-center justify-center bg-white" style={{ zoom: 1 }}>
      <div className="w-full px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className="text-[85px] tracking-tight font-bold text-center mb-4"
            style={{
              fontFamily: "IBM Plex Sans Thai, Serif",
              textRendering: "optimizeLegibility",
            }}
          >
            <div>
              เปิด<span className="underline underline-offset-5">{thaiDay}ที่&nbsp;&nbsp;{formattedDate}</span>
            </div>
          </div>
          <div
            className="max-w-xl mx-auto space-y-3"
            style={{
              fontFamily: "IBM Plex Sans Thai, Serif",
              textRendering: "optimizeLegibility",
            }}
          >
            <p className="text-center text-5xl mb-5">091 159 5122</p>
            <p className="text-left text-4xl ml-[-70px]">
              <b>ไอดีไลน์</b>: phornchai
            </p>
            <p className="text-left text-4xl ml-[-70px]">
              <b>เฟสบุ้ค</b>: ร้านเพชรน้ำหนึ่งนาฬิกา-แว่นตา
            </p>
          </div>
          {/* Bottom Section */}
          <div className="flex justify-around items-end mt-14">
            {/* QR Codes Section */}
            <div className="flex gap-10" style={{fontFamily: "IBM Plex Sans Thai, Serif"}}>
              <div className="text-center">
                <p className="mb-2 text-xl">Line ไลน์</p>
                <div className="w-[130px] h-[130px] flex items-center justify-center">
                  <img src="https://puroid.yoke-th.me/share/line.png" alt="Line QR Code" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="text-center">
                <p className="mb-2 text-lg">Facebook เฟสบุ้ค</p>
                <div className="w-[130px] h-[130px] flex items-center justify-center">
                  <img src="https://puroid.yoke-th.me/share/fb.png" alt="Facebook QR Code" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Bottom Right Text */}
            <div className="text-right text-xl ml-40" style={{
              fontFamily: "IBM Plex Sans Thai, Serif",
            }}>
              ร้านเพชรน้ำหนึ่ง นาฬิกา-แว่นตา
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFTemplate;
