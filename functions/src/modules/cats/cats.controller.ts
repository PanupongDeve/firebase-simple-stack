import { Controller, Get } from '@nestjs/common';
import { catsDb } from '../../domain/datasources/CloudFireStore/cats';

@Controller('cats')
export class CatsController {
    @Get()
    getCats(): string {
        catsDb.create({
            message: 'hello'
        })
        return 'Meow'
    }
}
