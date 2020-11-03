import { Cat, CatSchema } from './index.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatResolver } from './index.resolver';
import { CatsService } from './index.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  providers: [CatResolver, CatsService],
})
export class CatModule {}
