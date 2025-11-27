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

type DeliveryStatus = "pending" | "out-for-delivery" | "delivered" | "cancelled";
type DeliveryType = "home-delivery" | "store-pickup";

type DeliveryRecord = {
  id: string;
  user: string;
  gold: string;
  address: string;
  type: DeliveryType;
  date: string;
  status: DeliveryStatus;
};

const deliveriesData: DeliveryRecord[] = [
  {
    id: "DLV-1101",
    user: "John Smith",
    gold: "50g",
    address: "221B Baker Street, London",
    type: "home-delivery",
    date: "15/01/2024",
    status: "delivered",
  },
  {
    id: "DLV-1102",
    user: "Sarah Johnson",
    gold: "30g",
    address: "Sunset Avenue, California",
    type: "store-pickup",
    date: "20/01/2024",
    status: "pending",
  },
  {
    id: "DLV-1103",
    user: "Mike Wilson",
    gold: "100g",
    address: "Green Park, New Delhi",
    type: "home-delivery",
    date: "05/02/2024",
    status: "out-for-delivery",
  },
  {
    id: "DLV-1104",
    user: "Alice Brown",
    gold: "0g",
    address: "No address available",
    type: "store-pickup",
    date: "07/02/2024",
    status: "cancelled",
  },
];

export const Deliveries = () => {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-3">Deliveries</h1>
      <p className="text-neutral-400 mb-8">
        Manage gold deliveries and store pickups
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
          placeholder="Search by user, delivery ID, or date..."
          className="bg-neutral-900 border-neutral-800 text-white"
        />
      </div>

      {/* Table */}
      <div className="rounded-xl border border-neutral-800 overflow-hidden bg-neutral-900">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-neutral-400">Delivery ID</TableHead>
              <TableHead className="text-neutral-400">User</TableHead>
              <TableHead className="text-neutral-400">Gold</TableHead>
              <TableHead className="text-neutral-400">Delivery Type</TableHead>
              <TableHead className="text-neutral-400">Address</TableHead>
              <TableHead className="text-neutral-400">Date</TableHead>
              <TableHead className="text-neutral-400">Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {deliveriesData.map((delivery) => (
              <TableRow
                key={delivery.id}
                className="border-neutral-800 hover:bg-neutral-800/40"
              >
                <TableCell>{delivery.id}</TableCell>

                <TableCell>
                  <p className="font-semibold">{delivery.user}</p>
                </TableCell>

                <TableCell>{delivery.gold}</TableCell>

                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      delivery.type === "home-delivery"
                        ? "bg-[#E9B020] text-black"
                        : "bg-neutral-700 text-white"
                    }`}
                  >
                    {delivery.type === "home-delivery"
                      ? "Home Delivery"
                      : "Store Pickup"}
                  </span>
                </TableCell>

                <TableCell className="max-w-xs truncate">
                  {delivery.address}
                </TableCell>

                <TableCell>{delivery.date}</TableCell>

                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      delivery.status === "delivered"
                        ? "bg-neutral-800 text-green-400 border border-green-600/40"
                        : delivery.status === "out-for-delivery"
                        ? "bg-yellow-600 text-black"
                        : delivery.status === "pending"
                        ? "bg-[#E9B020] text-black"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    {delivery.status.replace(/-/g, " ")}
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
