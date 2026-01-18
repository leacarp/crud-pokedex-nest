import axios, { AxiosInstance } from 'axios';
import { HttpInterface } from '../interfaces/http-adapter.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AxiosAdapter implements HttpInterface {
  private readonly axios: AxiosInstance = axios;

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error('Error in axios - Check logs.');
    }
  }
}
