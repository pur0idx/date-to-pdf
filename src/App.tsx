import { NextUIProvider } from '@nextui-org/react';
import PDFGenerator from './components/PDFGenerator';

function App() {
  return (
    <NextUIProvider>
      <div className="min-h-[100dvh] bg-gray-100">
        <PDFGenerator />
      </div>
    </NextUIProvider>
  );
}

export default App;