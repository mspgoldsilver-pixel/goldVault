import { useState } from "react";
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
  Bell,
  Settings,
  LucideIcon,
  Menu,
  X,
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
  { label: "Live Rates", icon: Activity, path: "/admin/LiveRates" },
  { label: "Payments", icon: CreditCard, path: "/admin/payments" },
  { label: "Notifications", icon: Bell, path: "/admin/notifications" },

  { divider: true, label: "System" },
  { label: "Settings", icon: Settings, path: "/admin/settings" },
];

export const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {/* MOBILE HEADER */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-black z-40 border-b border-neutral-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 bg-[#E9B020] rounded-md flex items-center justify-center font-bold text-black">
            G
          </div>
          <p className="text-white font-semibold">Gold Vault Admin</p>
        </div>

        <button onClick={() => setOpen(true)}>
          <Menu size={26} className="text-white" />
        </button>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:static top-0 left-0 h-screen w-64 bg-black border-r border-neutral-800
          flex flex-col p-4 z-50 transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* CLOSE BUTTON (mobile only) */}
        <button
          className="md:hidden mb-4 flex justify-end"
          onClick={() => setOpen(false)}
        >
          <X size={28} className="text-white" />
        </button>

        {/* LOGO */}
        <div className="flex items-center gap-3 px-2 mb-8">
          <div className="h-10 w-10 bg-[#E9B020] rounded-lg flex items-center justify-center font-bold text-black">
            G
          </div>
          <div>
            <p className="text-lg font-semibold">Gold Vault</p>
            <p className="text-neutral-400 text-xs">Admin Console</p>
          </div>
        </div>

        {/* MENU */}
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
                onClick={() => setOpen(false)}
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

      {/* Push content down on mobile because header is fixed */}
      <div className="md:hidden h-16" />
    </>
  );
};
