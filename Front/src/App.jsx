import Header from "./header/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div>
      {
      location.pathname !== "/admin" ? (
        <Header />
      ) : (
        <></>
      )}
      <AppRoutes />
    </div>
  );
}

export default App;
