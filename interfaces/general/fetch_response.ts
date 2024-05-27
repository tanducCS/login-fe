export interface IResponse<T> {
  data: T; // response data
  status: number; // http status code
  detail?: string; // error message
  metadata?: any; // additional data
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
  refresh_token: string;
  token_key: string;
  fullname: string;
  role: string;
}

export interface JDID {
  job_id: number;
}

export interface CVParsingForm {
  page_index: number;
  limit: number;
  cv_lst: number[];
}

export interface CVMatchingJDForm {
  cv_lst: number[];
  job_id: number;
}

export interface Resume {
  id: number;
  job_title: string;
  strength: string;
  weakness: string;
  industry: string;
  skills: string;
  objectives: string;
  hobbies_and_interests: string;
  achievements_and_honors: string;
  country: string;
  city_province: string;
  address: string;
  name: string;
  birthday: string;
  gender: string;
  phone: string;
  email: string;
  nationality: string;
  desired_position: string;
  degree: string;
  iq: {
    score: string;
    explanation: string;
  };
  eq: {
    self_awareness: string;
    self_regulation: string;
    motivation: string;
    empathy: string;
    social_skills: string;
    explanation: string;
  };
  numerology: string;
  created_at: string;
  projects: string[];
  education: string[];
  experience: string[];
  certificates: string[];
}

export interface PaginationResume {
  total_items: number;
  total_pages: number;
  item_lst: Resume[];
}
export interface CVJDMatching {
  cv_id: number;
  job_id: number;
  job_name: string;
  name: string;
  job_title: number;
  overall: number;
  experience: number;
  skill: number;
  education: number;
  created_at: string;
}

export interface DataScore {
  score: number;
  explanation: string;
}

export interface MatchingDetail {
  resume_id: number;
  job_id: number;
  match_data: {
    job_title: DataScore;
    experience: DataScore;
    skill: DataScore;
    education: DataScore;
    overall: DataScore;
  };
}

export interface PaginationResume {
  total_items: number;
  total_pages: number;
  item_lst: Resume[];
}
export interface CVJDMatching {
  cv_id: number;
  job_id: number;
  job_name: string;
  name: string;
  job_title: number;
  overall: number;
  experience: number;
  skill: number;
  education: number;
}

export interface DataScore {
  score: number;
  explanation: string;
}

export interface MatchingDetail {
  resume_id: number;
  job_id: number;
  match_data: {
    job_title: DataScore;
    experience: DataScore;
    skill: DataScore;
    education: DataScore;
    overall: DataScore;
  };
}

export interface ResponseDashboardInfor {
  month: number;
  year: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    9: number;
    10: number;
    11: number;
    12: number;
  };
}

export interface ResponseDashboardInfor {
  month: number;
  year: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    9: number;
    10: number;
    11: number;
    12: number;
  };
}

export interface ForgotPasswordResponse {
  message: string;
  data: string;
  email: string;
}

export interface ResetPasswordResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  token_key: string;
}

export interface OtpAuthenResponse {
  message: string;
  data: string;
}

export interface UserDto {
  member_id: number;
  company: string;
  name: string;
  email: string;
  created_at: Date;
  is_active: boolean;
}

export interface DeleteUserResponse {
  message: string;
  data: {
    member_id: number
  }
}

export interface UpdateStatusUserResponse {
  message: string,
  data: {
    member_id: number,
    is_active: boolean
  }
}
