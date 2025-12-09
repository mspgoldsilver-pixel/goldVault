import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import LivePrice from "./pages/LivePrice";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Admin Pages
import AdminLogin from "./admin/pages/AdminLogin";
import { Users } from "./admin/pages/Users";
import { KYCRequests } from "./admin/pages/Kyc";
import { Vault } from "./admin/pages/Vault";
import { Orders } from "./admin/pages/Orders";
import { Deliveries } from "./admin/pages/Deliveries";
import { Notifications } from "./admin/pages/Notifications";
import { Settings } from "./admin/pages/Settings";
import { Payments } from "./admin/pages/Pay";
import { LiveRates } from "./admin/pages/LiveRates";
import AdminProtectedRoute from "./admin/routes/AdminProtectedRoute";
import { Dashboard } from "./admin/pages/Dashboard";

// Protected Route

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/live-price" element={<LivePrice />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />

          {/* Public Admin Login */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* ⭐ ONE protected wrapper for all admin pages */}
          <Route element={<AdminProtectedRoute />}>

            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/kyc" element={<KYCRequests />} />
            <Route path="/admin/vault" element={<Vault />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/deliveries" element={<Deliveries />} />
            <Route path="/admin/liveRates" element={<LiveRates />} />
            <Route path="/admin/notifications" element={<Notifications />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/admin/payments" element={<Payments />} />

          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
