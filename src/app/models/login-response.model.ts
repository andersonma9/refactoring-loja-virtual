export interface LoginResponse {
    success: boolean;
    message: string;
    token: string;
    cliente: number;
    is_staff: boolean;
}