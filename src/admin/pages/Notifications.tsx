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
import { Download, Check, Trash2 } from "lucide-react";

type NotificationType = "system" | "payment" | "kyc" | "order";
type NotificationStatus = "unread" | "read";

type NotificationRecord = {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  date: string;
  status: NotificationStatus;
};

const notificationsData: NotificationRecord[] = [
  {
    id: "NT-5001",
    title: "New KYC Submitted",
    message: "A new KYC verification request has been submitted.",
    type: "kyc",
    date: "15/01/2024 • 10:15 AM",
    status: "unread",
  },
  {
    id: "NT-5002",
    title: "Payment Successful",
    message: "₹45,000 received from John Smith.",
    type: "payment",
    date: "15/01/2024 • 09:40 AM",
    status: "read",
  },
  {
    id: "NT-5003",
    title: "Order Processing",
    message: "Order ORD-1236 is now in processing stage.",
    type: "order",
    date: "14/01/2024 • 04:22 PM",
    status: "read",
  },
  {
    id: "NT-5004",
    title: "System Alert",
    message: "Live price API was down for 2 minutes.",
    type: "system",
    date: "14/01/2024 • 11:10 AM",
    status: "unread",
  },
];

const getTypeBadge = (type: NotificationType) => {
  switch (type) {
    case "system":
      return "bg-red-600/20 text-red-400 border border-red-600/40";
    case "payment":
      return "bg-green-600/20 text-green-400 border border-green-600/40";
    case "kyc":
      return "bg-yellow-600 text-black";
    default:
      return "bg-blue-600/20 text-blue-400 border border-blue-600/40";
  }
};

const getStatusBadge = (status: NotificationStatus) => {
  return status === "unread"
    ? "bg-[#E9B020] text-black"
    : "bg-neutral-700 text-neutral-300";
};

export const Notifications = () => {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-3">Notifications</h1>
      <p className="text-neutral-400 mb-8">
        View system alerts, payment updates, user activity and more.
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
          placeholder="Search notifications..."
          className="bg-neutral-900 border-neutral-800 text-white"
        />
      </div>

      {/* Table */}
      <div className="rounded-xl border border-neutral-800 overflow-hidden bg-neutral-900">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-neutral-400">Title</TableHead>
              <TableHead className="text-neutral-400">Type</TableHead>
              <TableHead className="text-neutral-400">Status</TableHead>
              <TableHead className="text-neutral-400">Date</TableHead>
              <TableHead className="text-neutral-400">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {notificationsData.map((item) => (
              <TableRow
                key={item.id}
                className="border-neutral-800 hover:bg-neutral-800/40"
              >
                <TableCell>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-neutral-400 text-sm">{item.message}</p>
                </TableCell>

                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeBadge(
                      item.type
                    )}`}
                  >
                    {item.type.toUpperCase()}
                  </span>
                </TableCell>

                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </TableCell>

                <TableCell>{item.date}</TableCell>

                <TableCell>
                  <div className="flex gap-3">
                    {item.status === "unread" && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-green-600 text-green-400 hover:bg-green-600/20"
                      >
                        <Check size={14} className="mr-1" />
                        Mark Read
                      </Button>
                    )}

                    <Button
                      size="sm"
                      variant="outline"
                      className="border-red-600 text-red-400 hover:bg-red-600/20"
                    >
                      <Trash2 size={14} className="mr-1" />
                      Delete
                    </Button>
                  </div>
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
