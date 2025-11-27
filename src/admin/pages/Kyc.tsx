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

type KYCRequest = {
  name: string;
  email: string;
  phone: string;
  submitted: string;
  status: "pending" | "approved" | "rejected";
};

const kycRequests: KYCRequest[] = [
  {
    name: "Alice Brown",
    email: "alice.b@email.com",
    phone: "+91 98765 43213",
    submitted: "05/03/2024",
    status: "pending",
  },
  {
    name: "Rahul Verma",
    email: "rahul.v@email.com",
    phone: "+91 98765 43100",
    submitted: "07/03/2024",
    status: "pending",
  },
  {
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+91 98765 43210",
    submitted: "02/03/2024",
    status: "approved",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+91 98765 43211",
    submitted: "01/03/2024",
    status: "rejected",
  },
];

export const KYCRequests = () => {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-3">KYC Requests</h1>
      <p className="text-neutral-400 mb-8">
        Review and process user KYC submissions
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

      {/* Search Bar */}
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
              <TableHead className="text-neutral-400">Submitted On</TableHead>
              <TableHead className="text-neutral-400">Status</TableHead>
              <TableHead className="text-neutral-400">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {kycRequests.map((u) => (
              <TableRow
                key={u.email}
                className="border-neutral-800 hover:bg-neutral-800/40"
              >
                <TableCell>
                  <p className="font-semibold">{u.name}</p>
                  <p className="text-neutral-400 text-sm">{u.email}</p>
                </TableCell>

                <TableCell>{u.phone}</TableCell>
                <TableCell>{u.submitted}</TableCell>

                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      u.status === "approved"
                        ? "bg-neutral-800 text-green-400 border border-green-600/40"
                        : u.status === "pending"
                        ? "bg-[#E9B020] text-black"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    {u.status}
                  </span>
                </TableCell>

                <TableCell>
                  {u.status === "pending" ? (
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="border-green-600 text-green-400 hover:bg-green-600/20"
                      >
                        Approve
                      </Button>
                      <Button
                        variant="outline"
                        className="border-red-600 text-red-400 hover:bg-red-600/20"
                      >
                        Reject
                      </Button>
                    </div>
                  ) : (
                    <span className="text-neutral-500 text-sm">No action</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center text-neutral-400 mt-6">
        <p>Page 1 of 3</p>

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
