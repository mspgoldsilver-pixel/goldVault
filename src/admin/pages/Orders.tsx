import { AdminLayout } from "../layout/AdminLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download } from "lucide-react";

type OrderStatus = "completed" | "pending" | "processing" | "cancelled";
type OrderType = "buy" | "sell";

type OrderRecord = {
  id: string;
  user: string;
  type: OrderType;
  gold: string;
  amount: string;
  date: string;
  status: OrderStatus;
};

const ordersData: OrderRecord[] = [
  {
    id: "ORD-1234",
    user: "John Smith",
    type: "buy",
    gold: "50g",
    amount: "₹45,000",
    date: "15/01/2024",
    status: "completed",
  },
  {
    id: "ORD-1235",
    user: "Sarah Johnson",
    type: "sell",
    gold: "30g",
    amount: "₹28,000",
    date: "20/01/2024",
    status: "processing",
  },
  {
    id: "ORD-1236",
    user: "Mike Wilson",
    type: "buy",
    gold: "100g",
    amount: "₹90,000",
    date: "02/02/2024",
    status: "pending",
  },
  {
    id: "ORD-1237",
    user: "Alice Brown",
    type: "sell",
    gold: "0g",
    amount: "₹0",
    date: "07/02/2024",
    status: "cancelled",
  },
];

export const Orders = () => {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-3">Orders</h1>
      <p className="text-neutral-400 mb-8">
        Track all gold buy/sell orders placed by users
      </p>

      {/* Export Button */}
      <div className="flex justify-end gap-3 mb-6">
        <Button
          variant="outline"
          className="border-neutral-700 bg-neutral-900 text-white hover:bg-neutral-800"
        >
          <Download size={16} className="mr-2" />
          Export
        </Button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <Input
          placeholder="Search by user, order ID, or date..."
          className="bg-neutral-900 border-neutral-800 text-white"
        />
      </div>

      {/* Table */}
      <div className="rounded-xl border border-neutral-800 overflow-hidden bg-neutral-900">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-neutral-400">Order ID</TableHead>
              <TableHead className="text-neutral-400">User</TableHead>
              <TableHead className="text-neutral-400">Type</TableHead>
              <TableHead className="text-neutral-400">Gold</TableHead>
              <TableHead className="text-neutral-400">Amount</TableHead>
              <TableHead className="text-neutral-400">Date</TableHead>
              <TableHead className="text-neutral-400">Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {ordersData.map((order) => (
              <TableRow
                key={order.id}
                className="border-neutral-800 hover:bg-neutral-800/40"
              >
                <TableCell>{order.id}</TableCell>

                <TableCell>
                  <p className="font-semibold">{order.user}</p>
                </TableCell>

                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.type === "buy"
                        ? "bg-green-600/20 text-green-400 border border-green-600/40"
                        : "bg-red-600/20 text-red-400 border border-red-600/40"
                    }`}
                  >
                    {order.type}
                  </span>
                </TableCell>

                <TableCell>{order.gold}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>{order.date}</TableCell>

                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === "completed"
                        ? "bg-neutral-800 text-green-400 border border-green-600/40"
                        : order.status === "processing"
                        ? "bg-[#E9B020] text-black"
                        : order.status === "pending"
                        ? "bg-yellow-600 text-black"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    {order.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center text-neutral-400 mt-6">
        <p>Page 1 of 6</p>

        <div className="flex gap-3">
          <Button
            variant="outline"
            className="border-neutral-700 bg-neutral-900 text-white hover:bg-neutral-800"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            className="border-neutral-700 bg-neutral-900 text-white hover:bg-neutral-800"
          >
            Next
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
};
