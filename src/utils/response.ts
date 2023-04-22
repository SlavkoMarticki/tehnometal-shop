export class ApiResponse {
  data: any;
  success: boolean;
  constructor(data: any) {
    this.data = data;
    this.success = true;
  }
}

export class ErrorResponse {
  error: any;
  message: string;
  success: boolean;
  constructor(error: any) {
    this.error = error;
    this.message = error.message;
    this.success = false;
  }
}
