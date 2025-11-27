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

type VaultRecord = {
  id: string;
  user: string;
  gold: string;
  type: "deposit" | "withdraw";
  date: string;
  status: "completed" | "pending";
};

const vaultData: VaultRecord[] = [
  {
    id: "VL-1001",
    user: "John Smith",
    gold: "50g",
    type: "deposit",
    date: "15/01/2024",
    status: "completed",
  },
  {
    id: "VL-1002",
    user: "Sarah Johnson",
    gold: "30g",
    type: "withdraw",
    date: "20/01/2024",
    status: "pending",
  },
  {
    id: "VL-1003",
    user: "Mike Wilson",
    gold: "100g",
    type: "deposit",
    date: "02/02/2024",
    status: "completed",
  },
  {
    id: "VL-1004",
    user: "Alice Brown",
    gold: "0g",
    type: "withdraw",
    date: "07/02/2024",
    status: "completed",
  },
];

export const Vault = () => {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-3">Vault Management</h1>
      <p className="text-neutral-400 mb-8">
        Track vault deposits, withdrawals, and gold balances
      </p>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <p className="text-neutral-400 text-sm mb-1">Total Gold</p>
          <p className="text-3xl font-bold text-white">2,345g</p>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <p className="text-neutral-400 text-sm mb-1">Locked Gold</p>
          <p className="text-3xl font-bold text-white">850g</p>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <p className="text-neutral-400 text-sm mb-1">Available Gold</p>
          <p className="text-3xl font-bold text-white">1,495g</p>
        </div>
      </div>

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
          placeholder="Search by user, type, or date..."
          className="bg-neutral-900 border-neutral-800 text-white"
        />
      </div>

      {/* Table */}
      <div className="rounded-xl border border-neutral-800 overflow-hidden bg-neutral-900">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-neutral-400">Record ID</TableHead>
              <TableHead className="text-neutral-400">User</TableHead>
              <TableHead className="text-neutral-400">Gold Amount</TableHead>
              <TableHead className="text-neutral-400">Type</TableHead>
              <TableHead className="text-neutral-400">Date</TableHead>
              <TableHead className="text-neutral-400">Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {vaultData.map((record) => (
              <TableRow
                key={record.id}
                className="border-neutral-800 hover:bg-neutral-800/40"
              >
                <TableCell>{record.id}</TableCell>

                <TableCell>
                  <p className="font-semibold">{record.user}</p>
                </TableCell>

                <TableCell>{record.gold}</TableCell>

                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      record.type === "deposit"
                        ? "bg-green-600/20 text-green-400 border border-green-600/40"
                        : "bg-red-600/20 text-red-400 border border-red-600/40"
                    }`}
                  >
                    {record.type}
                  </span>
                </TableCell>

                <TableCell>{record.date}</TableCell>

                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      record.status === "completed"
                        ? "bg-neutral-800 text-green-400 border border-green-600/40"
                        : "bg-[#E9B020] text-black"
                    }`}
                  >
                    {record.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center text-neutral-400 mt-6">
        <p>Page 1 of 4</p>

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
