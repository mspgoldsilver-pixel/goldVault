import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Users, ShoppingCart, Boxes, FileCheck2 } from "lucide-react";
import { AdminLayout } from "../layout/AdminLayout";

export const Dashboard = () => {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <p className="text-neutral-400 mb-8">
        Welcome back, Admin. Here's what's happening today.
      </p>

      <div className="grid grid-cols-4 gap-5 mb-10">
        <MetricCard
          title="Total Users"
          value="12,459"
          icon={<Users size={26} />}
          change="+12.5%"
        />
        <MetricCard
          title="Active Orders"
          value="234"
          icon={<ShoppingCart size={26} />}
          change="+8.2%"
        />
        <MetricCard
          title="Gold in Vault"
          value="15,847.5g"
          icon={<Boxes size={26} />}
          change="+3.4%"
        />
        <MetricCard
          title="Pending KYC"
          value="18"
          icon={<FileCheck2 size={26} />}
          change="+2.1%"
        />
      </div>

      {/* Recent Orders + Pending Actions */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-xl">Recent Orders</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <OrderRow
              name="John Smith"
              type="buy"
              weight="50g"
              time="2 mins ago"
              amount="₹45,000"
              status="completed"
            />
            <OrderRow
              name="Sarah Johnson"
              type="sell"
              weight="30g"
              time="5 mins ago"
              amount="₹28,000"
              status="processing"
            />
            <OrderRow
              name="Mike Wilson"
              type="buy"
              weight="100g"
              time="12 mins ago"
              amount="₹90,000"
              status="pending"
            />
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-xl">Pending Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <ActionRow
              title="KYC Review"
              user="Alice Brown"
              priority="high"
            />
            <ActionRow
              title="Delivery Approval"
              user="Bob Davis"
              priority="medium"
            />
            <ActionRow
              title="Refund Request"
              user="Carol White"
              priority="high"
            />
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

type MetricCardProps = {
  title: string;
  value: string;
  icon: JSX.Element;
  change: string;
};

const MetricCard = ({ title, value, icon, change }: MetricCardProps) => {
  return (
    <Card className="bg-neutral-900 border-neutral-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm text-neutral-400">{title}</CardTitle>
        <div className="h-10 w-10 bg-[#E9B020]/20 flex items-center justify-center text-[#E9B020] rounded-md">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">{value}</p>
        <p className="text-green-500 text-sm">{change} vs last month</p>
      </CardContent>
    </Card>
  );
};

type OrderRowProps = {
  name: string;
  type: "buy" | "sell";
  weight: string;
  time: string;
  amount: string;
  status: string;
};

const OrderRow = ({ name, type, weight, time, amount, status }: OrderRowProps) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-xs text-neutral-500">
          {weight} • {time}
        </p>
      </div>

      <div className="text-right">
        <p className="font-semibold">{amount}</p>
        <span className="text-xs text-neutral-400">{status}</span>
      </div>
    </div>
  );
};

type ActionRowProps = {
  title: string;
  user: string;
  priority: "high" | "medium";
};

const ActionRow = ({ title, user, priority }: ActionRowProps) => {
  const color = priority === "high" ? "bg-red-600" : "bg-yellow-600";

  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-xs text-neutral-500">{user}</p>
      </div>
      <span className={`${color} text-xs px-3 py-1 rounded-full`}>
        {priority}
      </span>
    </div>
  );
};
