import { Field, Int, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class CatType {
  @Field(() => ID)
  id: number;
  @Field()
  name: string;
  @Field(() => Int)
  age: number;
  @Field()
  breed: string;
}