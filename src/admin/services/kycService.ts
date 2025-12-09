import api from "./api";

// =========================
// Correct Type Definitions
// =========================

export type KycDocumentURLs = {
  aadharFront: string;
  aadharBack: string;
  panCard: string;
  photo: string;
};

export type KycData = {
  documents: KycDocumentURLs;
  firstName: string;
  lastName: string;
  contactNumber: string;
  altContactNumber: string;
  aadharNumber: string;
  panNumber: string;
  permanentAddress: string;
  temporaryAddress: string;
};

export type KycUser = {
  _id: string;
  email: string;
  role: string;
  userVerified: boolean;
  createdAt: string;
};

export type KycRequest = {
  _id: string;
  data: KycData;
  userId: KycUser;
  status: "pending" | "approved" | "rejected";
  requestedAt: string;
  createdAt: string;
  updatedAt: string;
};

export type KycListResponse = {
  success: boolean;
  total: number;
  page: number;
  pages: number;
  requests: KycRequest[];
};

// =========================
// Auth Token Helper
// =========================

function getAuthToken(): string | null {
  const local = localStorage.getItem("admin_token");
  const session = sessionStorage.getItem("admin_token");
  return local || session || null;
}

// =========================
// Fetch KYC Requests
// =========================

export async function getKycRequests(
  page: number,
  limit: number
): Promise<KycListResponse> {
  const token = getAuthToken();

  const res = await api.get(
    `/api/v1/user/verify-requests?page=${page}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data as KycListResponse;
}

// =========================
// Approve KYC
// =========================

export async function approveKyc(
  id: string
): Promise<{ success: boolean }> {
  const token = getAuthToken();

  const res = await api.post(
    `/api/v1/admin/kyc/${id}/approve`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
}

// =========================
// Reject KYC
// =========================

export async function rejectKyc(
  id: string
): Promise<{ success: boolean }> {
  const token = getAuthToken();

  const res = await api.post(
    `/api/v1/admin/kyc/${id}/reject`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
}
