/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    email
    phone
    dob
    properties {
      nextToken
      __typename
    }
    people {
      nextToken
      __typename
    }
    businesses {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      phone
      dob
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getProperty = /* GraphQL */ `query GetProperty($id: ID!) {
  getProperty(id: $id) {
    id
    type
    address
    mortgage
    rent
    insurance
    homeWarranty
    applianceInfo
    repairInfo
    items {
      nextToken
      __typename
    }
    userID
    user {
      id
      email
      phone
      dob
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPropertyQueryVariables,
  APITypes.GetPropertyQuery
>;
export const listProperties = /* GraphQL */ `query ListProperties(
  $filter: ModelPropertyFilterInput
  $limit: Int
  $nextToken: String
) {
  listProperties(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      type
      address
      mortgage
      rent
      insurance
      homeWarranty
      applianceInfo
      repairInfo
      userID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPropertiesQueryVariables,
  APITypes.ListPropertiesQuery
>;
export const propertiesByUserID = /* GraphQL */ `query PropertiesByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPropertyFilterInput
  $limit: Int
  $nextToken: String
) {
  propertiesByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      type
      address
      mortgage
      rent
      insurance
      homeWarranty
      applianceInfo
      repairInfo
      userID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PropertiesByUserIDQueryVariables,
  APITypes.PropertiesByUserIDQuery
>;
export const getItem = /* GraphQL */ `query GetItem($id: ID!) {
  getItem(id: $id) {
    id
    name
    make
    material
    purchaseYear
    warrantyExpiry
    tags
    location
    propertyID
    property {
      id
      type
      address
      mortgage
      rent
      insurance
      homeWarranty
      applianceInfo
      repairInfo
      userID
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetItemQueryVariables, APITypes.GetItemQuery>;
export const listItems = /* GraphQL */ `query ListItems(
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      make
      material
      purchaseYear
      warrantyExpiry
      tags
      location
      propertyID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListItemsQueryVariables, APITypes.ListItemsQuery>;
export const itemsByPropertyID = /* GraphQL */ `query ItemsByPropertyID(
  $propertyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  itemsByPropertyID(
    propertyID: $propertyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      make
      material
      purchaseYear
      warrantyExpiry
      tags
      location
      propertyID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ItemsByPropertyIDQueryVariables,
  APITypes.ItemsByPropertyIDQuery
>;
export const getPerson = /* GraphQL */ `query GetPerson($id: ID!) {
  getPerson(id: $id) {
    id
    category
    name
    contactInfo
    schoolInfo
    collegeInfo
    jobInfo
    bankInfo
    financialInfo
    personalInfo
    userID
    user {
      id
      email
      phone
      dob
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    userPeopleId
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPersonQueryVariables, APITypes.GetPersonQuery>;
export const listPeople = /* GraphQL */ `query ListPeople(
  $filter: ModelPersonFilterInput
  $limit: Int
  $nextToken: String
) {
  listPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      category
      name
      contactInfo
      schoolInfo
      collegeInfo
      jobInfo
      bankInfo
      financialInfo
      personalInfo
      userID
      createdAt
      updatedAt
      userPeopleId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPeopleQueryVariables,
  APITypes.ListPeopleQuery
>;
export const peopleByUserID = /* GraphQL */ `query PeopleByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPersonFilterInput
  $limit: Int
  $nextToken: String
) {
  peopleByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      category
      name
      contactInfo
      schoolInfo
      collegeInfo
      jobInfo
      bankInfo
      financialInfo
      personalInfo
      userID
      createdAt
      updatedAt
      userPeopleId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PeopleByUserIDQueryVariables,
  APITypes.PeopleByUserIDQuery
>;
export const getBusiness = /* GraphQL */ `query GetBusiness($id: ID!) {
  getBusiness(id: $id) {
    id
    category
    name
    contactInfo
    pastOrderInfo
    financialInfo
    previousJobInfo
    userID
    user {
      id
      email
      phone
      dob
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    userBusinessesId
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBusinessQueryVariables,
  APITypes.GetBusinessQuery
>;
export const listBusinesses = /* GraphQL */ `query ListBusinesses(
  $filter: ModelBusinessFilterInput
  $limit: Int
  $nextToken: String
) {
  listBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      category
      name
      contactInfo
      pastOrderInfo
      financialInfo
      previousJobInfo
      userID
      createdAt
      updatedAt
      userBusinessesId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBusinessesQueryVariables,
  APITypes.ListBusinessesQuery
>;
export const businessesByUserID = /* GraphQL */ `query BusinessesByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBusinessFilterInput
  $limit: Int
  $nextToken: String
) {
  businessesByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      category
      name
      contactInfo
      pastOrderInfo
      financialInfo
      previousJobInfo
      userID
      createdAt
      updatedAt
      userBusinessesId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BusinessesByUserIDQueryVariables,
  APITypes.BusinessesByUserIDQuery
>;
