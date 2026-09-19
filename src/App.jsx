// import React from 'react';
// import Home from './pages/Home';

// function App() {
//   return (
//     <div className="min-h-screen bg-primary text-white">
//       <Home />
//     </div>
//   );
// }

// export default App;





import React from 'react';
import Home from './pages/Home';
import { ModalProvider } from './contexts/ModalContext';
import ExpertModal from './components/ExpertModal';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-primary text-white">
        <Home />
        <ExpertModal />
        <ChatWidget />
      </div>
    </ModalProvider>
  );
}

export default App;
