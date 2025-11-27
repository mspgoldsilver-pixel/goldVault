import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  FileCheck2,
  Box,
  ShoppingCart,
  Truck,
  Activity,
  CreditCard,
  Layers,
  Bell,
  Shield,
  Settings,
  LucideIcon,
} from "lucide-react";

type MenuItem = {
  label: string;
  icon?: LucideIcon;
  path?: string;
  divider?: boolean;
};

const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: Home, path: "/admin/dashboard" },
  { label: "Users", icon: Users, path: "/admin/users" },
  { label: "KYC Requests", icon: FileCheck2, path: "/admin/kyc" },
  { label: "Vault", icon: Box, path: "/admin/vault" },
  { label: "Orders", icon: ShoppingCart, path: "/admin/orders" },
  { label: "Deliveries", icon: Truck, path: "/admin/deliveries" },

  { divider: true, label: "Operations" },
  { label: "Live Rates", icon: Activity, path: "/admin/live-rates" },
  { label: "Payments", icon: CreditCard, path: "/admin/payments" },
  { label: "Notifications", icon: Bell, path: "/admin/notifications" },

  { divider: true, label: "System" },
  { label: "Settings", icon: Settings, path: "/admin/settings" },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-black border-r border-neutral-800 flex flex-col p-4">
      {/* Logo Section */}
      <div className="flex items-center gap-3 px-2 mb-8">
        <div className="h-10 w-10 bg-[#E9B020] rounded-lg flex items-center justify-center font-bold text-black">
          G
        </div>
        <div>
          <p className="text-lg font-semibold">Gold Vault</p>
          <p className="text-neutral-400 text-xs">Admin Console</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-2 overflow-y-auto pr-2">
        {menuItems.map((item) =>
          item.divider ? (
            <p
              key={item.label}
              className="mt-6 mb-2 text-xs uppercase text-neutral-500 px-2 tracking-wide"
            >
              {item.label}
            </p>
          ) : (
            <NavLink
              key={item.path}
              to={item.path ?? "#"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition ${
                  isActive
                    ? "bg-neutral-900 text-[#E9B020]"
                    : "text-neutral-300 hover:bg-neutral-900"
                }`
              }
            >
              {item.icon && <item.icon size={18} />}
              {item.label}
            </NavLink>
          )
        )}
      </nav>
    </aside>
  );
};
