import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import Results from "../components/Results";
import { AuthProvider } from "../components/Login/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Home />
        <Results />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
