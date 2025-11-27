import { AdminLayout } from "../layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

type RateCardProps = {
  label: string;
  value: string;
  change: string;
  positive: boolean;
};

const RateCard = ({ label, value, change, positive }: RateCardProps) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
      <p className="text-neutral-400 text-sm">{label}</p>
      <p className="text-4xl font-bold text-white mt-1">{value}</p>
      <p
        className={`text-sm mt-2 ${
          positive ? "text-green-400" : "text-red-500"
        }`}
      >
        {change}
      </p>
    </div>
  );
};

export const LiveRates = () => {
  return (
    <AdminLayout>
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-3">Live Gold Rates</h1>
      <p className="text-neutral-400 mb-8">
        Monitor and control gold buying/selling rates in real-time
      </p>

      {/* Live Ticker */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 mb-8">
        <p className="text-[#E9B020] font-semibold text-lg animate-pulse">
          Live Ticker: ₹6,845 /g • Updated 2 sec ago
        </p>
      </div>

      {/* Rate Cards */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        <RateCard
          label="Current Buy Price"
          value="₹6,845/g"
          change="+0.45%"
          positive={true}
        />
        <RateCard
          label="Current Sell Price"
          value="₹6,725/g"
          change="-0.12%"
          positive={false}
        />
        <RateCard
          label="24h High"
          value="₹6,920/g"
          change="+1.10%"
          positive={true}
        />
      </div>

      {/* Trend Chart Placeholder */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mb-10 h-64 flex items-center justify-center">
        <p className="text-neutral-500">Chart Placeholder (Add later)</p>
      </div>

      {/* Auto/Manual Control */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">Rate Control</h2>

        <div className="flex items-center justify-between mb-6">
          <p className="text-neutral-300 text-sm">
            Auto Update Prices from API
          </p>
          <Switch />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-neutral-400 text-sm mb-1">Manual Buy Price</p>
            <Input
              placeholder="Enter buy price"
              className="bg-neutral-800 border-neutral-700 text-white"
            />
          </div>

          <div>
            <p className="text-neutral-400 text-sm mb-1">Manual Sell Price</p>
            <Input
              placeholder="Enter sell price"
              className="bg-neutral-800 border-neutral-700 text-white"
            />
          </div>
        </div>

        <Button className="mt-6 bg-[#E9B020] text-black hover:bg-[#c79a1b]">
          Update Prices
        </Button>
      </div>

      {/* Buy/Sell Spread */}
      <div className="grid grid-cols-2 gap-6 mb-10">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3">Buy/Sell Spread</h3>
          <p className="text-neutral-400 mb-2">Spread Difference</p>
          <p className="text-3xl font-bold text-white">₹120</p>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3">Last Updated</h3>
          <p className="text-neutral-400">2 seconds ago</p>
        </div>
      </div>
    </AdminLayout>
  );
};
