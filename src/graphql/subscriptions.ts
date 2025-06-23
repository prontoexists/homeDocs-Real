/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateProperty = /* GraphQL */ `subscription OnCreateProperty(
  $filter: ModelSubscriptionPropertyFilterInput
  $owner: String
) {
  onCreateProperty(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePropertySubscriptionVariables,
  APITypes.OnCreatePropertySubscription
>;
export const onUpdateProperty = /* GraphQL */ `subscription OnUpdateProperty(
  $filter: ModelSubscriptionPropertyFilterInput
  $owner: String
) {
  onUpdateProperty(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePropertySubscriptionVariables,
  APITypes.OnUpdatePropertySubscription
>;
export const onDeleteProperty = /* GraphQL */ `subscription OnDeleteProperty(
  $filter: ModelSubscriptionPropertyFilterInput
  $owner: String
) {
  onDeleteProperty(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePropertySubscriptionVariables,
  APITypes.OnDeletePropertySubscription
>;
export const onCreateItem = /* GraphQL */ `subscription OnCreateItem(
  $filter: ModelSubscriptionItemFilterInput
  $owner: String
) {
  onCreateItem(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateItemSubscriptionVariables,
  APITypes.OnCreateItemSubscription
>;
export const onUpdateItem = /* GraphQL */ `subscription OnUpdateItem(
  $filter: ModelSubscriptionItemFilterInput
  $owner: String
) {
  onUpdateItem(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateItemSubscriptionVariables,
  APITypes.OnUpdateItemSubscription
>;
export const onDeleteItem = /* GraphQL */ `subscription OnDeleteItem(
  $filter: ModelSubscriptionItemFilterInput
  $owner: String
) {
  onDeleteItem(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteItemSubscriptionVariables,
  APITypes.OnDeleteItemSubscription
>;
export const onCreatePerson = /* GraphQL */ `subscription OnCreatePerson(
  $filter: ModelSubscriptionPersonFilterInput
  $owner: String
) {
  onCreatePerson(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePersonSubscriptionVariables,
  APITypes.OnCreatePersonSubscription
>;
export const onUpdatePerson = /* GraphQL */ `subscription OnUpdatePerson(
  $filter: ModelSubscriptionPersonFilterInput
  $owner: String
) {
  onUpdatePerson(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePersonSubscriptionVariables,
  APITypes.OnUpdatePersonSubscription
>;
export const onDeletePerson = /* GraphQL */ `subscription OnDeletePerson(
  $filter: ModelSubscriptionPersonFilterInput
  $owner: String
) {
  onDeletePerson(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePersonSubscriptionVariables,
  APITypes.OnDeletePersonSubscription
>;
export const onCreateBusiness = /* GraphQL */ `subscription OnCreateBusiness(
  $filter: ModelSubscriptionBusinessFilterInput
  $owner: String
) {
  onCreateBusiness(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBusinessSubscriptionVariables,
  APITypes.OnCreateBusinessSubscription
>;
export const onUpdateBusiness = /* GraphQL */ `subscription OnUpdateBusiness(
  $filter: ModelSubscriptionBusinessFilterInput
  $owner: String
) {
  onUpdateBusiness(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBusinessSubscriptionVariables,
  APITypes.OnUpdateBusinessSubscription
>;
export const onDeleteBusiness = /* GraphQL */ `subscription OnDeleteBusiness(
  $filter: ModelSubscriptionBusinessFilterInput
  $owner: String
) {
  onDeleteBusiness(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBusinessSubscriptionVariables,
  APITypes.OnDeleteBusinessSubscription
>;
