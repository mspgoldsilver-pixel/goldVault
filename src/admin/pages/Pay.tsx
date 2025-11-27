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

type PaymentStatus = "success" | "pending" | "failed" | "refunded";
type PaymentMethod = "UPI" | "Card" | "Net Banking";

type PaymentRecord = {
  id: string;
  user: string;
  method: PaymentMethod;
  amount: string;
  date: string;
  status: PaymentStatus;
};

const paymentsData: PaymentRecord[] = [
  {
    id: "PAY-9001",
    user: "John Smith",
    method: "UPI",
    amount: "₹45,000",
    date: "15/01/2024",
    status: "success",
  },
  {
    id: "PAY-9002",
    user: "Sarah Johnson",
    method: "Card",
    amount: "₹28,000",
    date: "20/01/2024",
    status: "pending",
  },
  {
    id: "PAY-9003",
    user: "Mike Wilson",
    method: "Net Banking",
    amount: "₹90,000",
    date: "05/02/2024",
    status: "failed",
  },
  {
    id: "PAY-9004",
    user: "Alice Brown",
    method: "UPI",
    amount: "₹12,000",
    date: "07/02/2024",
    status: "refunded",
  },
];

export const Payments = () => {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-3">Payments</h1>
      <p className="text-neutral-400 mb-8">
        Track user payments and transaction history
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
          placeholder="Search by user, payment ID, or date..."
          className="bg-neutral-900 border-neutral-800 text-white"
        />
      </div>

      {/* Table */}
      <div className="rounded-xl border border-neutral-800 overflow-hidden bg-neutral-900">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-neutral-400">Payment ID</TableHead>
              <TableHead className="text-neutral-400">User</TableHead>
              <TableHead className="text-neutral-400">Method</TableHead>
              <TableHead className="text-neutral-400">Amount</TableHead>
              <TableHead className="text-neutral-400">Date</TableHead>
              <TableHead className="text-neutral-400">Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paymentsData.map((payment) => (
              <TableRow
                key={payment.id}
                className="border-neutral-800 hover:bg-neutral-800/40"
              >
                <TableCell>{payment.id}</TableCell>

                <TableCell>
                  <p className="font-semibold">{payment.user}</p>
                </TableCell>

                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      payment.method === "UPI"
                        ? "bg-[#E9B020] text-black"
                        : payment.method === "Card"
                        ? "bg-blue-600/20 text-blue-400 border border-blue-600/40"
                        : "bg-purple-600/20 text-purple-400 border border-purple-600/40"
                    }`}
                  >
                    {payment.method}
                  </span>
                </TableCell>

                <TableCell>{payment.amount}</TableCell>

                <TableCell>{payment.date}</TableCell>

                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      payment.status === "success"
                        ? "bg-neutral-800 text-green-400 border border-green-600/40"
                        : payment.status === "pending"
                        ? "bg-yellow-600 text-black"
                        : payment.status === "refunded"
                        ? "bg-blue-600 text-white"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    {payment.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center text-neutral-400 mt-6">
        <p>Page 1 of 5</p>

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
