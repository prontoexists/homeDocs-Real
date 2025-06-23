/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createProperty = /* GraphQL */ `mutation CreateProperty(
  $input: CreatePropertyInput!
  $condition: ModelPropertyConditionInput
) {
  createProperty(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePropertyMutationVariables,
  APITypes.CreatePropertyMutation
>;
export const updateProperty = /* GraphQL */ `mutation UpdateProperty(
  $input: UpdatePropertyInput!
  $condition: ModelPropertyConditionInput
) {
  updateProperty(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePropertyMutationVariables,
  APITypes.UpdatePropertyMutation
>;
export const deleteProperty = /* GraphQL */ `mutation DeleteProperty(
  $input: DeletePropertyInput!
  $condition: ModelPropertyConditionInput
) {
  deleteProperty(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePropertyMutationVariables,
  APITypes.DeletePropertyMutation
>;
export const createItem = /* GraphQL */ `mutation CreateItem(
  $input: CreateItemInput!
  $condition: ModelItemConditionInput
) {
  createItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateItemMutationVariables,
  APITypes.CreateItemMutation
>;
export const updateItem = /* GraphQL */ `mutation UpdateItem(
  $input: UpdateItemInput!
  $condition: ModelItemConditionInput
) {
  updateItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateItemMutationVariables,
  APITypes.UpdateItemMutation
>;
export const deleteItem = /* GraphQL */ `mutation DeleteItem(
  $input: DeleteItemInput!
  $condition: ModelItemConditionInput
) {
  deleteItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteItemMutationVariables,
  APITypes.DeleteItemMutation
>;
export const createPerson = /* GraphQL */ `mutation CreatePerson(
  $input: CreatePersonInput!
  $condition: ModelPersonConditionInput
) {
  createPerson(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePersonMutationVariables,
  APITypes.CreatePersonMutation
>;
export const updatePerson = /* GraphQL */ `mutation UpdatePerson(
  $input: UpdatePersonInput!
  $condition: ModelPersonConditionInput
) {
  updatePerson(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePersonMutationVariables,
  APITypes.UpdatePersonMutation
>;
export const deletePerson = /* GraphQL */ `mutation DeletePerson(
  $input: DeletePersonInput!
  $condition: ModelPersonConditionInput
) {
  deletePerson(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePersonMutationVariables,
  APITypes.DeletePersonMutation
>;
export const createBusiness = /* GraphQL */ `mutation CreateBusiness(
  $input: CreateBusinessInput!
  $condition: ModelBusinessConditionInput
) {
  createBusiness(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBusinessMutationVariables,
  APITypes.CreateBusinessMutation
>;
export const updateBusiness = /* GraphQL */ `mutation UpdateBusiness(
  $input: UpdateBusinessInput!
  $condition: ModelBusinessConditionInput
) {
  updateBusiness(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBusinessMutationVariables,
  APITypes.UpdateBusinessMutation
>;
export const deleteBusiness = /* GraphQL */ `mutation DeleteBusiness(
  $input: DeleteBusinessInput!
  $condition: ModelBusinessConditionInput
) {
  deleteBusiness(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBusinessMutationVariables,
  APITypes.DeleteBusinessMutation
>;
