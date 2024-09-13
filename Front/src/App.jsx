
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./common/context/AuthProvider";
import AppRoutes from "./routes/AppRoutes";


function App() {
  return (
    <div>
      <AuthProvider>
        
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>

      </AuthProvider>
    </div>
    
  );
}

export default App;
