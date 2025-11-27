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
import { Fuel, Download } from "lucide-react";

type User = {
  name: string;
  email: string;
  phone: string;
  role: "Premium" | "Standard";
  kyc: "approved" | "pending" | "rejected";
  gold: string;
  orders: number;
  joined: string;
};

const users: User[] = [
  {
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+91 98765 43210",
    role: "Premium",
    kyc: "approved",
    gold: "150.5g",
    orders: 12,
    joined: "15/01/2024",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+91 98765 43211",
    role: "Standard",
    kyc: "pending",
    gold: "75g",
    orders: 5,
    joined: "20/02/2024",
  },
  {
    name: "Mike Wilson",
    email: "mike.wilson@email.com",
    phone: "+91 98765 43212",
    role: "Premium",
    kyc: "approved",
    gold: "250.25g",
    orders: 28,
    joined: "08/01/2024",
  },
  {
    name: "Alice Brown",
    email: "alice.b@email.com",
    phone: "+91 98765 43213",
    role: "Standard",
    kyc: "rejected",
    gold: "0g",
    orders: 0,
    joined: "05/03/2024",
  },
];

export const Users = () => {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-3">User Management</h1>
      <p className="text-neutral-400 mb-8">
        Manage and monitor all registered users
      </p>

      {/* Top Right Buttons */}
      <div className="flex justify-end gap-3 mb-6">
        <Button
          variant="outline"
          className="border-neutral-700 bg-neutral-900 text-white hover:bg-neutral-800"
        >
          <Fuel size={16} className="mr-2" />
          Filters
        </Button>

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
          placeholder="Search by name, email, or phone..."
          className="bg-neutral-900 border-neutral-800 text-white"
        />
      </div>

      {/* Table */}
      <div className="rounded-xl border border-neutral-800 overflow-hidden bg-neutral-900">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-neutral-400">Name</TableHead>
              <TableHead className="text-neutral-400">Phone</TableHead>
              <TableHead className="text-neutral-400">Role</TableHead>
              <TableHead className="text-neutral-400">KYC Status</TableHead>
              <TableHead className="text-neutral-400">Gold Balance</TableHead>
              <TableHead className="text-neutral-400">Orders</TableHead>
              <TableHead className="text-neutral-400">Joined</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((u) => (
              <TableRow
                key={u.email}
                className="border-neutral-800 hover:bg-neutral-800/40"
              >
                <TableCell>
                  <p className="font-semibold">{u.name}</p>
                  <p className="text-neutral-400 text-sm">{u.email}</p>
                </TableCell>

                <TableCell>{u.phone}</TableCell>

                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      u.role === "Premium"
                        ? "bg-[#E9B020] text-black"
                        : "bg-neutral-700 text-white"
                    }`}
                  >
                    {u.role}
                  </span>
                </TableCell>

                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      u.kyc === "approved"
                        ? "bg-neutral-800 text-green-400 border border-green-600/40"
                        : u.kyc === "pending"
                        ? "bg-[#E9B020] text-black"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    {u.kyc}
                  </span>
                </TableCell>

                <TableCell>{u.gold}</TableCell>
                <TableCell>{u.orders}</TableCell>
                <TableCell>{u.joined}</TableCell>
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
