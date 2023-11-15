import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from nest JS!';
  }
  receivingData(): string {
    return 'testing receiving data from nest JS!';
  }
}
