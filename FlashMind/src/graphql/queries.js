/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFlashCard = /* GraphQL */ `
  query GetFlashCard($id: ID!) {
    getFlashCard(id: $id) {
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
export const listFlashCards = /* GraphQL */ `
  query ListFlashCards(
    $filter: ModelFlashCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFlashCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncFlashCards = /* GraphQL */ `
  query SyncFlashCards(
    $filter: ModelFlashCardFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFlashCards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUserFlashCard = /* GraphQL */ `
  query GetUserFlashCard($id: ID!) {
    getUserFlashCard(id: $id) {
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
export const listUserFlashCards = /* GraphQL */ `
  query ListUserFlashCards(
    $filter: ModelUserFlashCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserFlashCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUserFlashCards = /* GraphQL */ `
  query SyncUserFlashCards(
    $filter: ModelUserFlashCardFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserFlashCards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const userFlashCardsByUserIdAndFlashCardId = /* GraphQL */ `
  query UserFlashCardsByUserIdAndFlashCardId(
    $userId: ID!
    $flashCardId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFlashCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userFlashCardsByUserIdAndFlashCardId(
      userId: $userId
      flashCardId: $flashCardId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
