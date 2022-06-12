export interface LoginCredentials {
    email: string;
    password: string;
}

export interface LoginResponse {
    id: number;
    email: string;
    createDate: Date;
}