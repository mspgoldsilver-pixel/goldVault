import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

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

import { Fuel, Download, Eye } from "lucide-react";

import {
  getKycRequests,
  approveKyc,
  rejectKyc,
  type KycListResponse,
  type KycRequest,
} from "../services/kycService";

// -----------------------------
// Modal Component
// -----------------------------
const ViewModal = ({
  data,
  onClose,
}: {
  data: KycRequest;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50">
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl w-full max-w-3xl p-6 overflow-y-auto max-h-[90vh]">

        <div className="flex justify-between items-center border-b border-neutral-700 pb-3">
          <h2 className="text-2xl font-semibold text-white">KYC Details</h2>
          <Button
            onClick={onClose}
            className="bg-red-600 hover:bg-red-500 text-white rounded-lg"
          >
            Close
          </Button>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4 text-white">
          <div>
            <p className="text-neutral-400 text-sm">First Name</p>
            <p>{data.data.firstName}</p>
          </div>
          <div>
            <p className="text-neutral-400 text-sm">Last Name</p>
            <p>{data.data.lastName}</p>
          </div>

          <div>
            <p className="text-neutral-400 text-sm">Phone</p>
            <p>{data.data.contactNumber}</p>
          </div>

          <div>
            <p className="text-neutral-400 text-sm">Alternate Phone</p>
            <p>{data.data.altContactNumber}</p>
          </div>

          <div>
            <p className="text-neutral-400 text-sm">Aadhar Number</p>
            <p>{data.data.aadharNumber}</p>
          </div>

          <div>
            <p className="text-neutral-400 text-sm">PAN Number</p>
            <p>{data.data.panNumber}</p>
          </div>

          <div className="col-span-2">
            <p className="text-neutral-400 text-sm">Permanent Address</p>
            <p>{data.data.permanentAddress}</p>
          </div>

          <div className="col-span-2">
            <p className="text-neutral-400 text-sm">Temporary Address</p>
            <p>{data.data.temporaryAddress}</p>
          </div>
        </div>

        {/* Documents */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-white mb-3">Documents</h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-neutral-400 text-sm mb-2">Aadhar Front</p>
              <img
                src={data.data.documents.aadharFront}
                className="rounded-md border border-neutral-700"
              />
            </div>

            <div>
              <p className="text-neutral-400 text-sm mb-2">Aadhar Back</p>
              <img
                src={data.data.documents.aadharBack}
                className="rounded-md border border-neutral-700"
              />
            </div>

            <div>
              <p className="text-neutral-400 text-sm mb-2">PAN Card</p>
              <img
                src={data.data.documents.panCard}
                className="rounded-md border border-neutral-700"
              />
            </div>

            <div>
              <p className="text-neutral-400 text-sm mb-2">Photo</p>
              <img
                src={data.data.documents.photo}
                className="rounded-md border border-neutral-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// -----------------------------
// Main Page
// -----------------------------

export const KYCRequests = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [viewData, setViewData] = useState<KycRequest | null>(null);

  const { data, isLoading } = useQuery<KycListResponse>({
    queryKey: ["kyc", page],
    queryFn: () => getKycRequests(page, 10),
  });

  const approveMutation = useMutation({
    mutationFn: approveKyc,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["kyc"] }),
  });

  const rejectMutation = useMutation({
    mutationFn: rejectKyc,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["kyc"] }),
  });

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-3">KYC Requests</h1>
      <p className="text-neutral-400 mb-8">
        Review and process user KYC submissions
      </p>

      <div className="flex justify-end gap-3 mb-6">
        <Button className="bg-neutral-900 border border-neutral-700 text-white hover:bg-neutral-800">
          <Fuel size={16} className="mr-2" />
          Filters
        </Button>

        <Button className="bg-neutral-900 border border-neutral-700 text-white hover:bg-neutral-800">
          <Download size={16} className="mr-2" />
          Export
        </Button>
      </div>

      <Input
        placeholder="Search (disabled — backend not ready)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-neutral-900 border-neutral-800 text-white mb-6"
      />

      {/* Table */}
      <div className="rounded-xl border border-neutral-800 overflow-hidden bg-neutral-900">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-neutral-400">Name</TableHead>
              <TableHead className="text-neutral-400">Phone</TableHead>
              <TableHead className="text-neutral-400">Requested</TableHead>
              <TableHead className="text-neutral-400">Status</TableHead>
              <TableHead className="text-neutral-400">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center p-5">
                  Loading...
                </TableCell>
              </TableRow>
            ) : (
              data?.requests.map((u) => (
                <TableRow key={u._id} className="border-neutral-800">
                  <TableCell>
                    <p className="font-semibold text-white">
                      {u.data.firstName} {u.data.lastName}
                    </p>
                    <p className="text-neutral-400 text-sm">
                      {u.userId.email}
                    </p>
                  </TableCell>

                  <TableCell className="text-white">
                    {u.data.contactNumber}
                  </TableCell>

                  <TableCell className="text-neutral-300">
                    {new Date(u.requestedAt).toLocaleString()}
                  </TableCell>

                  <TableCell>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        u.status === "approved"
                          ? "bg-green-900/40 text-green-400 border border-green-600/40"
                          : u.status === "pending"
                            ? "bg-[#E9B020] text-black"
                            : "bg-red-700 text-white"
                      }`}
                    >
                      {u.status}
                    </span>
                  </TableCell>

                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => setViewData(u)}
                        className="bg-[#E9B020] hover:bg-[#d8a11b] text-black font-medium rounded-lg"
                      >
                        <Eye size={16} className="mr-1" />
                        View
                      </Button>

                      {u.status === "pending" && (
                        <>
                          <Button
                            onClick={() => approveMutation.mutate(u._id)}
                            className="border border-green-500 text-green-400 hover:bg-green-600/20 rounded-lg"
                          >
                            Approve
                          </Button>

                          <Button
                            onClick={() => rejectMutation.mutate(u._id)}
                            className="border border-red-500 text-red-400 hover:bg-red-600/20 rounded-lg"
                          >
                            Reject
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {data && (
        <div className="flex justify-between items-center text-neutral-400 mt-6">
          <p>
            Page {data.page} of {Math.ceil(data.total / 10)}
          </p>

          <div className="flex gap-3">
            <Button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="bg-neutral-900 border border-neutral-700 text-white hover:bg-neutral-800 disabled:opacity-40"
            >
              Previous
            </Button>

            <Button
              disabled={data.total <= page * 10}
              onClick={() => setPage((p) => p + 1)}
              className="bg-neutral-900 border border-neutral-700 text-white hover:bg-neutral-800 disabled:opacity-40"
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {viewData && (
        <ViewModal data={viewData} onClose={() => setViewData(null)} />
      )}
    </AdminLayout>
  );
};
