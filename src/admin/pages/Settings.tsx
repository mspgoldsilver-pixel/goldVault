import { AdminLayout } from "../layout/AdminLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export const Settings = () => {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-3">Settings</h1>
      <p className="text-neutral-400 mb-10">
        Manage admin preferences, security controls, and system configuration
      </p>

      {/* GENERAL SETTINGS */}
      <section className="mb-10 bg-neutral-900 border border-neutral-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">General Settings</h2>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-neutral-400 text-sm mb-1">Admin Name</p>
            <Input
              placeholder="Enter full name"
              className="bg-neutral-800 border-neutral-700 text-white"
            />
          </div>

          <div>
            <p className="text-neutral-400 text-sm mb-1">Email Address</p>
            <Input
              placeholder="email@example.com"
              className="bg-neutral-800 border-neutral-700 text-white"
            />
          </div>
        </div>

        <div className="mt-6">
          <Button className="bg-[#E9B020] text-black hover:bg-[#c79a1b]">
            Save Changes
          </Button>
        </div>
      </section>

      {/* SECURITY SETTINGS */}
      <section className="mb-10 bg-neutral-900 border border-neutral-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Security</h2>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-neutral-400 text-sm mb-1">Old Password</p>
            <Input
              type="password"
              placeholder="Enter old password"
              className="bg-neutral-800 border-neutral-700 text-white"
            />
          </div>

          <div>
            <p className="text-neutral-400 text-sm mb-1">New Password</p>
            <Input
              type="password"
              placeholder="Enter new password"
              className="bg-neutral-800 border-neutral-700 text-white"
            />
          </div>
        </div>

        <div className="mt-6">
          <Button className="bg-[#E9B020] text-black hover:bg-[#c79a1b]">
            Update Password
          </Button>
        </div>
      </section>

      {/* NOTIFICATION PREFERENCES */}
      <section className="mb-10 bg-neutral-900 border border-neutral-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>

        <div className="flex items-center justify-between py-3 border-b border-neutral-800">
          <p className="text-neutral-300 text-sm">User Activity Alerts</p>
          <Switch />
        </div>

        <div className="flex items-center justify-between py-3 border-b border-neutral-800">
          <p className="text-neutral-300 text-sm">KYC Request Alerts</p>
          <Switch />
        </div>

        <div className="flex items-center justify-between py-3 border-b border-neutral-800">
          <p className="text-neutral-300 text-sm">Payment Notifications</p>
          <Switch />
        </div>

        <div className="flex items-center justify-between py-3">
          <p className="text-neutral-300 text-sm">System Alerts</p>
          <Switch />
        </div>

        <Button className="mt-6 bg-[#E9B020] text-black hover:bg-[#c79a1b]">
          Save Notification Settings
        </Button>
      </section>

      {/* API KEYS */}
      <section className="mb-10 bg-neutral-900 border border-neutral-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">API Configuration</h2>

        <div className="mb-6">
          <p className="text-neutral-400 text-sm mb-1">Gold Price API Key</p>
          <Input
            placeholder="Enter API key"
            className="bg-neutral-800 border-neutral-700 text-white"
          />
        </div>

        <div className="mb-6">
          <p className="text-neutral-400 text-sm mb-1">Webhook URL</p>
          <Input
            placeholder="https://your-webhook-url.com"
            className="bg-neutral-800 border-neutral-700 text-white"
          />
        </div>

        <Button className="bg-[#E9B020] text-black hover:bg-[#c79a1b]">
          Save API Settings
        </Button>
      </section>

      {/* ADMIN PROFILE INFO */}
      <section className="mb-10 bg-neutral-900 border border-neutral-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Admin Profile</h2>

        <div className="flex items-center gap-6">
          <div className="h-20 w-20 bg-neutral-800 rounded-full flex items-center justify-center text-2xl font-bold text-[#E9B020]">
            A
          </div>

          <div>
            <p className="text-white font-semibold text-lg">jagdish</p>
            <p className="text-neutral-400 text-sm">Super Admin</p>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};
