// Code generated by Prisma (prisma@1.20.7). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  company: (where?: CompanyWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  company: (where: CompanyWhereUniqueInput) => CompanyPromise;
  companies: (
    args?: {
      where?: CompanyWhereInput;
      orderBy?: CompanyOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Company>;
  companiesConnection: (
    args?: {
      where?: CompanyWhereInput;
      orderBy?: CompanyOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => CompanyConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createCompany: (data: CompanyCreateInput) => CompanyPromise;
  updateCompany: (
    args: { data: CompanyUpdateInput; where: CompanyWhereUniqueInput }
  ) => CompanyPromise;
  updateManyCompanies: (
    args: { data: CompanyUpdateManyMutationInput; where?: CompanyWhereInput }
  ) => BatchPayloadPromise;
  upsertCompany: (
    args: {
      where: CompanyWhereUniqueInput;
      create: CompanyCreateInput;
      update: CompanyUpdateInput;
    }
  ) => CompanyPromise;
  deleteCompany: (where: CompanyWhereUniqueInput) => CompanyPromise;
  deleteManyCompanies: (where?: CompanyWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  company: (
    where?: CompanySubscriptionWhereInput
  ) => CompanySubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type CompanyOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface CompanyUpdateInput {
  name?: String;
  users?: UserUpdateManyWithoutCompaniesInput;
}

export type CompanyWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserUpdateWithoutCompaniesDataInput {
  name?: String;
}

export interface CompanyWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  users_every?: UserWhereInput;
  users_some?: UserWhereInput;
  users_none?: UserWhereInput;
  AND?: CompanyWhereInput[] | CompanyWhereInput;
  OR?: CompanyWhereInput[] | CompanyWhereInput;
  NOT?: CompanyWhereInput[] | CompanyWhereInput;
}

export interface CompanyCreateWithoutUsersInput {
  name: String;
}

export interface CompanyUpdateManyMutationInput {
  name?: String;
}

export interface UserUpsertWithWhereUniqueWithoutCompaniesInput {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutCompaniesDataInput;
  create: UserCreateWithoutCompaniesInput;
}

export interface CompanySubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: CompanyWhereInput;
  AND?: CompanySubscriptionWhereInput[] | CompanySubscriptionWhereInput;
  OR?: CompanySubscriptionWhereInput[] | CompanySubscriptionWhereInput;
  NOT?: CompanySubscriptionWhereInput[] | CompanySubscriptionWhereInput;
}

export interface CompanyCreateInput {
  name: String;
  users?: UserCreateManyWithoutCompaniesInput;
}

export interface CompanyUpsertWithWhereUniqueWithoutUsersInput {
  where: CompanyWhereUniqueInput;
  update: CompanyUpdateWithoutUsersDataInput;
  create: CompanyCreateWithoutUsersInput;
}

export interface UserCreateManyWithoutCompaniesInput {
  create?: UserCreateWithoutCompaniesInput[] | UserCreateWithoutCompaniesInput;
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
}

export interface CompanyUpdateWithWhereUniqueWithoutUsersInput {
  where: CompanyWhereUniqueInput;
  data: CompanyUpdateWithoutUsersDataInput;
}

export interface UserCreateWithoutCompaniesInput {
  name: String;
}

export interface CompanyUpdateManyWithoutUsersInput {
  create?: CompanyCreateWithoutUsersInput[] | CompanyCreateWithoutUsersInput;
  delete?: CompanyWhereUniqueInput[] | CompanyWhereUniqueInput;
  connect?: CompanyWhereUniqueInput[] | CompanyWhereUniqueInput;
  disconnect?: CompanyWhereUniqueInput[] | CompanyWhereUniqueInput;
  update?:
    | CompanyUpdateWithWhereUniqueWithoutUsersInput[]
    | CompanyUpdateWithWhereUniqueWithoutUsersInput;
  upsert?:
    | CompanyUpsertWithWhereUniqueWithoutUsersInput[]
    | CompanyUpsertWithWhereUniqueWithoutUsersInput;
}

export interface CompanyCreateManyWithoutUsersInput {
  create?: CompanyCreateWithoutUsersInput[] | CompanyCreateWithoutUsersInput;
  connect?: CompanyWhereUniqueInput[] | CompanyWhereUniqueInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface UserCreateInput {
  name: String;
  companies?: CompanyCreateManyWithoutUsersInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  companies_every?: CompanyWhereInput;
  companies_some?: CompanyWhereInput;
  companies_none?: CompanyWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface UserUpdateWithWhereUniqueWithoutCompaniesInput {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutCompaniesDataInput;
}

export interface UserUpdateManyWithoutCompaniesInput {
  create?: UserCreateWithoutCompaniesInput[] | UserCreateWithoutCompaniesInput;
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  update?:
    | UserUpdateWithWhereUniqueWithoutCompaniesInput[]
    | UserUpdateWithWhereUniqueWithoutCompaniesInput;
  upsert?:
    | UserUpsertWithWhereUniqueWithoutCompaniesInput[]
    | UserUpsertWithWhereUniqueWithoutCompaniesInput;
}

export interface UserUpdateManyMutationInput {
  name?: String;
}

export interface UserUpdateInput {
  name?: String;
  companies?: CompanyUpdateManyWithoutUsersInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface CompanyUpdateWithoutUsersDataInput {
  name?: String;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface AggregateCompany {
  count: Int;
}

export interface AggregateCompanyPromise
  extends Promise<AggregateCompany>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCompanySubscription
  extends Promise<AsyncIterator<AggregateCompany>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface CompanySubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface CompanySubscriptionPayloadPromise
  extends Promise<CompanySubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CompanyPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CompanyPreviousValuesPromise>() => T;
}

export interface CompanySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CompanySubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CompanySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CompanyPreviousValuesSubscription>() => T;
}

export interface CompanyEdge {
  cursor: String;
}

export interface CompanyEdgePromise extends Promise<CompanyEdge>, Fragmentable {
  node: <T = CompanyPromise>() => T;
  cursor: () => Promise<String>;
}

export interface CompanyEdgeSubscription
  extends Promise<AsyncIterator<CompanyEdge>>,
    Fragmentable {
  node: <T = CompanySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface Company {
  id: ID_Output;
  name: String;
}

export interface CompanyPromise extends Promise<Company>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  users: <T = FragmentableArray<User>>(
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface CompanySubscription
  extends Promise<AsyncIterator<Company>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  users: <T = Promise<AsyncIterator<UserSubscription>>>(
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface CompanyConnection {}

export interface CompanyConnectionPromise
  extends Promise<CompanyConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CompanyEdge>>() => T;
  aggregate: <T = AggregateCompanyPromise>() => T;
}

export interface CompanyConnectionSubscription
  extends Promise<AsyncIterator<CompanyConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CompanyEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCompanySubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface CompanyPreviousValues {
  id: ID_Output;
  name: String;
}

export interface CompanyPreviousValuesPromise
  extends Promise<CompanyPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface CompanyPreviousValuesSubscription
  extends Promise<AsyncIterator<CompanyPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  name: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  companies: <T = FragmentableArray<Company>>(
    args?: {
      where?: CompanyWhereInput;
      orderBy?: CompanyOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  companies: <T = Promise<AsyncIterator<CompanySubscription>>>(
    args?: {
      where?: CompanyWhereInput;
      orderBy?: CompanyOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserConnection {}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/**
 * Model Metadata
 */

export const models = [
  {
    name: "Company",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
