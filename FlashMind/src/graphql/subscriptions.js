/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFlashCard = /* GraphQL */ `
  subscription OnCreateFlashCard(
    $filter: ModelSubscriptionFlashCardFilterInput
  ) {
    onCreateFlashCard(filter: $filter) {
      id
      question
      answer
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateFlashCard = /* GraphQL */ `
  subscription OnUpdateFlashCard(
    $filter: ModelSubscriptionFlashCardFilterInput
  ) {
    onUpdateFlashCard(filter: $filter) {
      id
      question
      answer
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteFlashCard = /* GraphQL */ `
  subscription OnDeleteFlashCard(
    $filter: ModelSubscriptionFlashCardFilterInput
  ) {
    onDeleteFlashCard(filter: $filter) {
      id
      question
      answer
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      username
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      username
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      username
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateUserFlashCard = /* GraphQL */ `
  subscription OnCreateUserFlashCard(
    $filter: ModelSubscriptionUserFlashCardFilterInput
  ) {
    onCreateUserFlashCard(filter: $filter) {
      id
      userId
      flashCardId
      reviewedAt
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateUserFlashCard = /* GraphQL */ `
  subscription OnUpdateUserFlashCard(
    $filter: ModelSubscriptionUserFlashCardFilterInput
  ) {
    onUpdateUserFlashCard(filter: $filter) {
      id
      userId
      flashCardId
      reviewedAt
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteUserFlashCard = /* GraphQL */ `
  subscription OnDeleteUserFlashCard(
    $filter: ModelSubscriptionUserFlashCardFilterInput
  ) {
    onDeleteUserFlashCard(filter: $filter) {
      id
      userId
      flashCardId
      reviewedAt
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
