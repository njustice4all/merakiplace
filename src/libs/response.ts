import { AxiosResponse } from 'axios';

export function successResponse<T>(res: AxiosResponse<T>) {
  return res.data;
}

export function errorResponse(name: string) {
  return (err: any) => {
    throw new Error(`Failed to ${name}. ${JSON.stringify(err)}`);
  };
}
