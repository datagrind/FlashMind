/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFlashCard = /* GraphQL */ `
  mutation CreateFlashCard(
    $input: CreateFlashCardInput!
    $condition: ModelFlashCardConditionInput
  ) {
    createFlashCard(input: $input, condition: $condition) {
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
export const updateFlashCard = /* GraphQL */ `
  mutation UpdateFlashCard(
    $input: UpdateFlashCardInput!
    $condition: ModelFlashCardConditionInput
  ) {
    updateFlashCard(input: $input, condition: $condition) {
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
export const deleteFlashCard = /* GraphQL */ `
  mutation DeleteFlashCard(
    $input: DeleteFlashCardInput!
    $condition: ModelFlashCardConditionInput
  ) {
    deleteFlashCard(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserFlashCard = /* GraphQL */ `
  mutation CreateUserFlashCard(
    $input: CreateUserFlashCardInput!
    $condition: ModelUserFlashCardConditionInput
  ) {
    createUserFlashCard(input: $input, condition: $condition) {
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
export const updateUserFlashCard = /* GraphQL */ `
  mutation UpdateUserFlashCard(
    $input: UpdateUserFlashCardInput!
    $condition: ModelUserFlashCardConditionInput
  ) {
    updateUserFlashCard(input: $input, condition: $condition) {
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
export const deleteUserFlashCard = /* GraphQL */ `
  mutation DeleteUserFlashCard(
    $input: DeleteUserFlashCardInput!
    $condition: ModelUserFlashCardConditionInput
  ) {
    deleteUserFlashCard(input: $input, condition: $condition) {
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
