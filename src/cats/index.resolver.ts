import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatType } from './type';
import { CatsService } from './index.service';
import { CreateCatInput } from './input';

@Resolver()
export class CatResolver {
  constructor(
    private catService: CatsService,
  ) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [CatType])
  async cats() {
    return this.catService.findAll();
  }

  @Mutation(() => CatType)
  async createCat(@Args('input') input: CreateCatInput) {
    return this.catService.create(input);
  }
}