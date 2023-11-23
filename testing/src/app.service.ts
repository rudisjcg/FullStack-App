import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Everything Works in App!';
  }
  receivingData(): string {
    return 'testing receiving data from nest JS!';
  }
}
