import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerFlashCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FlashCard, 'id'>;
  };
  readonly id: string;
  readonly question: string;
  readonly answer: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFlashCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FlashCard, 'id'>;
  };
  readonly id: string;
  readonly question: string;
  readonly answer: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FlashCard = LazyLoading extends LazyLoadingDisabled ? EagerFlashCard : LazyFlashCard

export declare const FlashCard: (new (init: ModelInit<FlashCard>) => FlashCard) & {
  copyOf(source: FlashCard, mutator: (draft: MutableModel<FlashCard>) => MutableModel<FlashCard> | void): FlashCard;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerUserFlashCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFlashCard, 'id'>;
  };
  readonly id: string;
  readonly userId: string;
  readonly flashCardId: string;
  readonly reviewedAt?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserFlashCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFlashCard, 'id'>;
  };
  readonly id: string;
  readonly userId: string;
  readonly flashCardId: string;
  readonly reviewedAt?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserFlashCard = LazyLoading extends LazyLoadingDisabled ? EagerUserFlashCard : LazyUserFlashCard

export declare const UserFlashCard: (new (init: ModelInit<UserFlashCard>) => UserFlashCard) & {
  copyOf(source: UserFlashCard, mutator: (draft: MutableModel<UserFlashCard>) => MutableModel<UserFlashCard> | void): UserFlashCard;
}