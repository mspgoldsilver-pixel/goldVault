import { Bell, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";

export const Topbar = () => {
  return (
    <header className="h-16 bg-black border-b border-neutral-800 flex items-center justify-between px-6">
      <input
        placeholder="Search users, orders, vault... (Press /)"
        className="w-96 bg-neutral-900 text-sm rounded-md px-3 py-2 outline-none border border-neutral-800 placeholder-neutral-500"
      />

      <div className="flex items-center gap-6">
        <div className="relative">
          <Bell size={22} className="text-neutral-300" />
          <span className="absolute -top-1 -right-1 bg-red-600 text-[10px] px-1.5 py-[1px] rounded-full">
            3
          </span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <Avatar className="h-8 w-8 border border-neutral-700 bg-neutral-800">
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>

          <div className="text-sm">
            <p className="font-semibold">Admin User</p>
            <p className="text-neutral-400 text-xs">Super Admin</p>
          </div>

          <ChevronDown size={18} className="text-neutral-400" />
        </div>
      </div>
    </header>
  );
};
