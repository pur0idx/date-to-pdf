import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PDF_WIDTH = 842; // A4 width in landscape
const PDF_HEIGHT = 595; // A4 height in landscape

export const generatePDF = async (elementId: string, filename: string): Promise<void> => {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Template element not found');
  }

  element.classList.remove('hidden');
  
  try {
    const canvas = await html2canvas(element, {
      scale: 4, // Increased for better quality
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      width: PDF_WIDTH,
      height: PDF_HEIGHT,
      letterRendering: true, // Improved text rendering
      imageTimeout: 0,
      removeContainer: true,
    });

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'pt',
      format: [PDF_WIDTH, PDF_HEIGHT],
      hotfixes: ['px_scaling']
    });

    pdf.addImage(
      canvas.toDataURL('image/png', 1.0),
      'PNG',
      0,
      0,
      PDF_WIDTH,
      PDF_HEIGHT,
      undefined,
      'FAST'
    );
    
    pdf.save(filename);
  } finally {
    element.classList.add('hidden');
  }
};