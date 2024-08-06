import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';


@Injectable()
export class AppService {
  getHello(): string {
    let a: User = { id: '1', name: 'test' };
    return `This is a Farm + Prisma ${a.name} project!`;
  }
}
