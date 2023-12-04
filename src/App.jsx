import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage"
import ProductsPage from "./pages/ProductsPage"
import ProductsFormPage from "./pages/ProductsFormPage";
import ProtectedRoute from "./ProtectedRoute";
import { ProductsProvider } from "./context/ProductsContext";
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
// Importa el nuevo contexto de proveedores
import { ProvidersProvider } from "./context/ProvidersContext";
import ProvidersPage from "./pages/ProvidersPage";
import ProvidersFormPage from "./pages/ProvidersFormPage";

import { EmployeesProvider } from "./context/EmployeesContext";
import EmployeesPage from './pages/EmployeesPage';
import EmployeesFormPage from "./pages/EmployeesFormPage";

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <ProvidersProvider> {/* Agrega el ProvidersProvider */}
          <EmployeesProvider>
            <BrowserRouter>
              <main className="container mx-auto px-10" >
                <Navbar></Navbar>
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/register' element={<RegisterPage />} />

                  <Route element={<ProtectedRoute />}>
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='/products' element={<ProductsPage />} />
                    <Route path='/add-product' element={<ProductsFormPage />} />
                    <Route path='/product/:id' element={<ProductsFormPage />} />
                    {/* Nuevas rutas para proveedores */}
                    <Route path='/providers' element={<ProvidersPage />} />
                    <Route path='/add-provider' element={<ProvidersFormPage />} />
                    <Route path='/provider/:id' element={<ProvidersFormPage />} />

                    <Route path='/employees' element={<EmployeesPage />} />
                    <Route path='/add-employee' element={<EmployeesFormPage />} />
                    <Route path='/employee/:id' element={<EmployeesFormPage />} />


                  </Route>
                  <Route path="*" element={<NotFound/>}/>
                </Routes>
              </main>
            </BrowserRouter>
          </EmployeesProvider>
        </ProvidersProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}

export default App;
