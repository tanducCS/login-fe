import { QueryKey } from "@tanstack/react-query";
export const USER_KEY: QueryKey = ["user"];
export const RESUME_HISTORY: QueryKey = ["resume_history"];
export const RESUME_EXTRACT: QueryKey = ["resume_extract"];
export const MATCHING_RESULT: QueryKey = ["matching_result"];
export const MATCHING_DETAIL: QueryKey = ["matching_detail"];
export const MATCHING_HISTORY: QueryKey = ["matching_history"];

export const AUTH = {
  LOGIN: "/auth/login",
  FORGOTPASS: "/auth/forgot-pasword",
  RESETPASS: "/auth/reset-forgot-password",
  OTPAUTHEN: "/auth/verify-otp-forgot-pasword"
};

export const USER = {
  ADD: "/auth/add-member",
  GETALL: "/auth/list-members",
  DELETE: "/auth/remove-member",
  UPDATE_STATUS: "/auth/lock-n-unlock-member"
};

export const RESUME = {
  UPLOAD_CVS: "/matching/upload-cvs",
  DELETE_UPLOADED_CV: "/matching/delete-uploaded-cv",
  DELETE_EXTRACTED_CV: "/matching/delete-extracted-result",
  DELETE_JD: "/matching/delete-uploaded-jd",
  DELETE_ALL_CV_JD: "/matching/cancel",
  DELETE_MATCHING_RESULT: "/matching/delete-matching-result",
  UPLOAD_JD: "/matching/upload-job",
  CV_PARSING: "/matching/cv-parsing",
  EXTRACTED_CV_HISTORY: "/matching/list-extracted-history",
  CV_MATCHING: "/matching/cv-matching",
  CV_MATCHING_HISTORY: "/matching/list-matching-history",
  CV_MATCHING_DETAIL: "/matching/get-matching-result",
  CV_PDF: "/matching/get-cv-pdf",
  JD_PDF: "/matching/get-jd-pdf",
};

export const DASHBOARD = {
  MONTHLY_SPEND: "/matching/get-dashboard-info"
}
