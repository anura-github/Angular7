import { Register } from '../model/register';

export class LoginResponse {
    success:boolean;
    token:string;
    user: Register;
}
