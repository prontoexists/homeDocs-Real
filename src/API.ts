/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  email: string,
  phone?: string | null,
  dob?: string | null,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  email: string,
  phone?: string | null,
  dob?: string | null,
  properties?: ModelPropertyConnection | null,
  people?: ModelPersonConnection | null,
  businesses?: ModelBusinessConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelPropertyConnection = {
  __typename: "ModelPropertyConnection",
  items:  Array<Property | null >,
  nextToken?: string | null,
};

export type Property = {
  __typename: "Property",
  id: string,
  type: string,
  address: string,
  mortgage?: string | null,
  rent?: string | null,
  insurance?: string | null,
  homeWarranty?: string | null,
  applianceInfo?: string | null,
  repairInfo?: string | null,
  items?: ModelItemConnection | null,
  userID: string,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items:  Array<Item | null >,
  nextToken?: string | null,
};

export type Item = {
  __typename: "Item",
  id: string,
  name: string,
  make?: string | null,
  material?: string | null,
  purchaseYear?: number | null,
  warrantyExpiry?: string | null,
  tags?: Array< string | null > | null,
  location?: string | null,
  propertyID: string,
  property?: Property | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelPersonConnection = {
  __typename: "ModelPersonConnection",
  items:  Array<Person | null >,
  nextToken?: string | null,
};

export type Person = {
  __typename: "Person",
  id: string,
  category: string,
  name: string,
  contactInfo?: string | null,
  schoolInfo?: string | null,
  collegeInfo?: string | null,
  jobInfo?: string | null,
  bankInfo?: string | null,
  financialInfo?: string | null,
  personalInfo?: string | null,
  userID: string,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  userPeopleId?: string | null,
  owner?: string | null,
};

export type ModelBusinessConnection = {
  __typename: "ModelBusinessConnection",
  items:  Array<Business | null >,
  nextToken?: string | null,
};

export type Business = {
  __typename: "Business",
  id: string,
  category: string,
  name: string,
  contactInfo?: string | null,
  pastOrderInfo?: string | null,
  financialInfo?: string | null,
  previousJobInfo?: string | null,
  userID: string,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  userBusinessesId?: string | null,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  phone?: string | null,
  dob?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreatePropertyInput = {
  id?: string | null,
  type: string,
  address: string,
  mortgage?: string | null,
  rent?: string | null,
  insurance?: string | null,
  homeWarranty?: string | null,
  applianceInfo?: string | null,
  repairInfo?: string | null,
  userID: string,
};

export type ModelPropertyConditionInput = {
  type?: ModelStringInput | null,
  address?: ModelStringInput | null,
  mortgage?: ModelStringInput | null,
  rent?: ModelStringInput | null,
  insurance?: ModelStringInput | null,
  homeWarranty?: ModelStringInput | null,
  applianceInfo?: ModelStringInput | null,
  repairInfo?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPropertyConditionInput | null > | null,
  or?: Array< ModelPropertyConditionInput | null > | null,
  not?: ModelPropertyConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePropertyInput = {
  id: string,
  type?: string | null,
  address?: string | null,
  mortgage?: string | null,
  rent?: string | null,
  insurance?: string | null,
  homeWarranty?: string | null,
  applianceInfo?: string | null,
  repairInfo?: string | null,
  userID?: string | null,
};

export type DeletePropertyInput = {
  id: string,
};

export type CreateItemInput = {
  id?: string | null,
  name: string,
  make?: string | null,
  material?: string | null,
  purchaseYear?: number | null,
  warrantyExpiry?: string | null,
  tags?: Array< string | null > | null,
  location?: string | null,
  propertyID: string,
};

export type ModelItemConditionInput = {
  name?: ModelStringInput | null,
  make?: ModelStringInput | null,
  material?: ModelStringInput | null,
  purchaseYear?: ModelIntInput | null,
  warrantyExpiry?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  location?: ModelStringInput | null,
  propertyID?: ModelIDInput | null,
  and?: Array< ModelItemConditionInput | null > | null,
  or?: Array< ModelItemConditionInput | null > | null,
  not?: ModelItemConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateItemInput = {
  id: string,
  name?: string | null,
  make?: string | null,
  material?: string | null,
  purchaseYear?: number | null,
  warrantyExpiry?: string | null,
  tags?: Array< string | null > | null,
  location?: string | null,
  propertyID?: string | null,
};

export type DeleteItemInput = {
  id: string,
};

export type CreatePersonInput = {
  id?: string | null,
  category: string,
  name: string,
  contactInfo?: string | null,
  schoolInfo?: string | null,
  collegeInfo?: string | null,
  jobInfo?: string | null,
  bankInfo?: string | null,
  financialInfo?: string | null,
  personalInfo?: string | null,
  userID: string,
  userPeopleId?: string | null,
};

export type ModelPersonConditionInput = {
  category?: ModelStringInput | null,
  name?: ModelStringInput | null,
  contactInfo?: ModelStringInput | null,
  schoolInfo?: ModelStringInput | null,
  collegeInfo?: ModelStringInput | null,
  jobInfo?: ModelStringInput | null,
  bankInfo?: ModelStringInput | null,
  financialInfo?: ModelStringInput | null,
  personalInfo?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPersonConditionInput | null > | null,
  or?: Array< ModelPersonConditionInput | null > | null,
  not?: ModelPersonConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userPeopleId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdatePersonInput = {
  id: string,
  category?: string | null,
  name?: string | null,
  contactInfo?: string | null,
  schoolInfo?: string | null,
  collegeInfo?: string | null,
  jobInfo?: string | null,
  bankInfo?: string | null,
  financialInfo?: string | null,
  personalInfo?: string | null,
  userID?: string | null,
  userPeopleId?: string | null,
};

export type DeletePersonInput = {
  id: string,
};

export type CreateBusinessInput = {
  id?: string | null,
  category: string,
  name: string,
  contactInfo?: string | null,
  pastOrderInfo?: string | null,
  financialInfo?: string | null,
  previousJobInfo?: string | null,
  userID: string,
  userBusinessesId?: string | null,
};

export type ModelBusinessConditionInput = {
  category?: ModelStringInput | null,
  name?: ModelStringInput | null,
  contactInfo?: ModelStringInput | null,
  pastOrderInfo?: ModelStringInput | null,
  financialInfo?: ModelStringInput | null,
  previousJobInfo?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelBusinessConditionInput | null > | null,
  or?: Array< ModelBusinessConditionInput | null > | null,
  not?: ModelBusinessConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userBusinessesId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateBusinessInput = {
  id: string,
  category?: string | null,
  name?: string | null,
  contactInfo?: string | null,
  pastOrderInfo?: string | null,
  financialInfo?: string | null,
  previousJobInfo?: string | null,
  userID?: string | null,
  userBusinessesId?: string | null,
};

export type DeleteBusinessInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelPropertyFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  address?: ModelStringInput | null,
  mortgage?: ModelStringInput | null,
  rent?: ModelStringInput | null,
  insurance?: ModelStringInput | null,
  homeWarranty?: ModelStringInput | null,
  applianceInfo?: ModelStringInput | null,
  repairInfo?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPropertyFilterInput | null > | null,
  or?: Array< ModelPropertyFilterInput | null > | null,
  not?: ModelPropertyFilterInput | null,
  owner?: ModelStringInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelItemFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  make?: ModelStringInput | null,
  material?: ModelStringInput | null,
  purchaseYear?: ModelIntInput | null,
  warrantyExpiry?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  location?: ModelStringInput | null,
  propertyID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelItemFilterInput | null > | null,
  or?: Array< ModelItemFilterInput | null > | null,
  not?: ModelItemFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelPersonFilterInput = {
  id?: ModelIDInput | null,
  category?: ModelStringInput | null,
  name?: ModelStringInput | null,
  contactInfo?: ModelStringInput | null,
  schoolInfo?: ModelStringInput | null,
  collegeInfo?: ModelStringInput | null,
  jobInfo?: ModelStringInput | null,
  bankInfo?: ModelStringInput | null,
  financialInfo?: ModelStringInput | null,
  personalInfo?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPersonFilterInput | null > | null,
  or?: Array< ModelPersonFilterInput | null > | null,
  not?: ModelPersonFilterInput | null,
  userPeopleId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelBusinessFilterInput = {
  id?: ModelIDInput | null,
  category?: ModelStringInput | null,
  name?: ModelStringInput | null,
  contactInfo?: ModelStringInput | null,
  pastOrderInfo?: ModelStringInput | null,
  financialInfo?: ModelStringInput | null,
  previousJobInfo?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBusinessFilterInput | null > | null,
  or?: Array< ModelBusinessFilterInput | null > | null,
  not?: ModelBusinessFilterInput | null,
  userBusinessesId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  dob?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  userPeopleId?: ModelSubscriptionIDInput | null,
  userBusinessesId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPropertyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  mortgage?: ModelSubscriptionStringInput | null,
  rent?: ModelSubscriptionStringInput | null,
  insurance?: ModelSubscriptionStringInput | null,
  homeWarranty?: ModelSubscriptionStringInput | null,
  applianceInfo?: ModelSubscriptionStringInput | null,
  repairInfo?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPropertyFilterInput | null > | null,
  or?: Array< ModelSubscriptionPropertyFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  make?: ModelSubscriptionStringInput | null,
  material?: ModelSubscriptionStringInput | null,
  purchaseYear?: ModelSubscriptionIntInput | null,
  warrantyExpiry?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  propertyID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionItemFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionPersonFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  category?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  contactInfo?: ModelSubscriptionStringInput | null,
  schoolInfo?: ModelSubscriptionStringInput | null,
  collegeInfo?: ModelSubscriptionStringInput | null,
  jobInfo?: ModelSubscriptionStringInput | null,
  bankInfo?: ModelSubscriptionStringInput | null,
  financialInfo?: ModelSubscriptionStringInput | null,
  personalInfo?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPersonFilterInput | null > | null,
  or?: Array< ModelSubscriptionPersonFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionBusinessFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  category?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  contactInfo?: ModelSubscriptionStringInput | null,
  pastOrderInfo?: ModelSubscriptionStringInput | null,
  financialInfo?: ModelSubscriptionStringInput | null,
  previousJobInfo?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBusinessFilterInput | null > | null,
  or?: Array< ModelSubscriptionBusinessFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phone?: string | null,
    dob?: string | null,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    people?:  {
      __typename: "ModelPersonConnection",
      nextToken?: string | null,
    } | null,
    businesses?:  {
      __typename: "ModelBusinessConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phone?: string | null,
    dob?: string | null,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    people?:  {
      __typename: "ModelPersonConnection",
      nextToken?: string | null,
    } | null,
    businesses?:  {
      __typename: "ModelBusinessConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phone?: string | null,
    dob?: string | null,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    people?:  {
      __typename: "ModelPersonConnection",
      nextToken?: string | null,
    } | null,
    businesses?:  {
      __typename: "ModelBusinessConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePropertyMutationVariables = {
  input: CreatePropertyInput,
  condition?: ModelPropertyConditionInput | null,
};

export type CreatePropertyMutation = {
  createProperty?:  {
    __typename: "Property",
    id: string,
    type: string,
    address: string,
    mortgage?: string | null,
    rent?: string | null,
    insurance?: string | null,
    homeWarranty?: string | null,
    applianceInfo?: string | null,
    repairInfo?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePropertyMutationVariables = {
  input: UpdatePropertyInput,
  condition?: ModelPropertyConditionInput | null,
};

export type UpdatePropertyMutation = {
  updateProperty?:  {
    __typename: "Property",
    id: string,
    type: string,
    address: string,
    mortgage?: string | null,
    rent?: string | null,
    insurance?: string | null,
    homeWarranty?: string | null,
    applianceInfo?: string | null,
    repairInfo?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePropertyMutationVariables = {
  input: DeletePropertyInput,
  condition?: ModelPropertyConditionInput | null,
};

export type DeletePropertyMutation = {
  deleteProperty?:  {
    __typename: "Property",
    id: string,
    type: string,
    address: string,
    mortgage?: string | null,
    rent?: string | null,
    insurance?: string | null,
    homeWarranty?: string | null,
    applianceInfo?: string | null,
    repairInfo?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateItemMutationVariables = {
  input: CreateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type CreateItemMutation = {
  createItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    make?: string | null,
    material?: string | null,
    purchaseYear?: number | null,
    warrantyExpiry?: string | null,
    tags?: Array< string | null > | null,
    location?: string | null,
    propertyID: string,
    property?:  {
      __typename: "Property",
      id: string,
      type: string,
      address: string,
      mortgage?: string | null,
      rent?: string | null,
      insurance?: string | null,
      homeWarranty?: string | null,
      applianceInfo?: string | null,
      repairInfo?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type UpdateItemMutation = {
  updateItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    make?: string | null,
    material?: string | null,
    purchaseYear?: number | null,
    warrantyExpiry?: string | null,
    tags?: Array< string | null > | null,
    location?: string | null,
    propertyID: string,
    property?:  {
      __typename: "Property",
      id: string,
      type: string,
      address: string,
      mortgage?: string | null,
      rent?: string | null,
      insurance?: string | null,
      homeWarranty?: string | null,
      applianceInfo?: string | null,
      repairInfo?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput,
  condition?: ModelItemConditionInput | null,
};

export type DeleteItemMutation = {
  deleteItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    make?: string | null,
    material?: string | null,
    purchaseYear?: number | null,
    warrantyExpiry?: string | null,
    tags?: Array< string | null > | null,
    location?: string | null,
    propertyID: string,
    property?:  {
      __typename: "Property",
      id: string,
      type: string,
      address: string,
      mortgage?: string | null,
      rent?: string | null,
      insurance?: string | null,
      homeWarranty?: string | null,
      applianceInfo?: string | null,
      repairInfo?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePersonMutationVariables = {
  input: CreatePersonInput,
  condition?: ModelPersonConditionInput | null,
};

export type CreatePersonMutation = {
  createPerson?:  {
    __typename: "Person",
    id: string,
    category: string,
    name: string,
    contactInfo?: string | null,
    schoolInfo?: string | null,
    collegeInfo?: string | null,
    jobInfo?: string | null,
    bankInfo?: string | null,
    financialInfo?: string | null,
    personalInfo?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPeopleId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdatePersonMutationVariables = {
  input: UpdatePersonInput,
  condition?: ModelPersonConditionInput | null,
};

export type UpdatePersonMutation = {
  updatePerson?:  {
    __typename: "Person",
    id: string,
    category: string,
    name: string,
    contactInfo?: string | null,
    schoolInfo?: string | null,
    collegeInfo?: string | null,
    jobInfo?: string | null,
    bankInfo?: string | null,
    financialInfo?: string | null,
    personalInfo?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPeopleId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeletePersonMutationVariables = {
  input: DeletePersonInput,
  condition?: ModelPersonConditionInput | null,
};

export type DeletePersonMutation = {
  deletePerson?:  {
    __typename: "Person",
    id: string,
    category: string,
    name: string,
    contactInfo?: string | null,
    schoolInfo?: string | null,
    collegeInfo?: string | null,
    jobInfo?: string | null,
    bankInfo?: string | null,
    financialInfo?: string | null,
    personalInfo?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPeopleId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateBusinessMutationVariables = {
  input: CreateBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type CreateBusinessMutation = {
  createBusiness?:  {
    __typename: "Business",
    id: string,
    category: string,
    name: string,
    contactInfo?: string | null,
    pastOrderInfo?: string | null,
    financialInfo?: string | null,
    previousJobInfo?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBusinessesId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateBusinessMutationVariables = {
  input: UpdateBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type UpdateBusinessMutation = {
  updateBusiness?:  {
    __typename: "Business",
    id: string,
    category: string,
    name: string,
    contactInfo?: string | null,
    pastOrderInfo?: string | null,
    financialInfo?: string | null,
    previousJobInfo?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBusinessesId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteBusinessMutationVariables = {
  input: DeleteBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type DeleteBusinessMutation = {
  deleteBusiness?:  {
    __typename: "Business",
    id: string,
    category: string,
    name: string,
    contactInfo?: string | null,
    pastOrderInfo?: string | null,
    financialInfo?: string | null,
    previousJobInfo?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBusinessesId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phone?: string | null,
    dob?: string | null,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    people?:  {
      __typename: "ModelPersonConnection",
      nextToken?: string | null,
    } | null,
    businesses?:  {
      __typename: "ModelBusinessConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPropertyQueryVariables = {
  id: string,
};

export type GetPropertyQuery = {
  getProperty?:  {
    __typename: "Property",
    id: string,
    type: string,
    address: string,
    mortgage?: string | null,
    rent?: string | null,
    insurance?: string | null,
    homeWarranty?: string | null,
    applianceInfo?: string | null,
    repairInfo?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPropertiesQueryVariables = {
  filter?: ModelPropertyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPropertiesQuery = {
  listProperties?:  {
    __typename: "ModelPropertyConnection",
    items:  Array< {
      __typename: "Property",
      id: string,
      type: string,
      address: string,
      mortgage?: string | null,
      rent?: string | null,
      insurance?: string | null,
      homeWarranty?: string | null,
      applianceInfo?: string | null,
      repairInfo?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PropertiesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPropertyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PropertiesByUserIDQuery = {
  propertiesByUserID?:  {
    __typename: "ModelPropertyConnection",
    items:  Array< {
      __typename: "Property",
      id: string,
      type: string,
      address: string,
      mortgage?: string | null,
      rent?: string | null,
      insurance?: string | null,
      homeWarranty?: string | null,
      applianceInfo?: string | null,
      repairInfo?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    make?: string | null,
    material?: string | null,
    purchaseYear?: number | null,
    warrantyExpiry?: string | null,
    tags?: Array< string | null > | null,
    location?: string | null,
    propertyID: string,
    property?:  {
      __typename: "Property",
      id: string,
      type: string,
      address: string,
      mortgage?: string | null,
      rent?: string | null,
      insurance?: string | null,
      homeWarranty?: string | null,
      applianceInfo?: string | null,
      repairInfo?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      name: string,
      make?: string | null,
      material?: string | null,
      purchaseYear?: number | null,
      warrantyExpiry?: string | null,
      tags?: Array< string | null > | null,
      location?: string | null,
      propertyID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ItemsByPropertyIDQueryVariables = {
  propertyID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ItemsByPropertyIDQuery = {
  itemsByPropertyID?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      name: string,
      make?: string | null,
      material?: string | null,
      purchaseYear?: number | null,
      warrantyExpiry?: string | null,
      tags?: Array< string | null > | null,
      location?: string | null,
      propertyID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPersonQueryVariables = {
  id: string,
};

export type GetPersonQuery = {
  getPerson?:  {
    __typename: "Person",
    id: string,
    category: string,
    name: string,
    contactInfo?: string | null,
    schoolInfo?: string | null,
    collegeInfo?: string | null,
    jobInfo?: string | null,
    bankInfo?: string | null,
    financialInfo?: string | null,
    personalInfo?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPeopleId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListPeopleQueryVariables = {
  filter?: ModelPersonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPeopleQuery = {
  listPeople?:  {
    __typename: "ModelPersonConnection",
    items:  Array< {
      __typename: "Person",
      id: string,
      category: string,
      name: string,
      contactInfo?: string | null,
      schoolInfo?: string | null,
      collegeInfo?: string | null,
      jobInfo?: string | null,
      bankInfo?: string | null,
      financialInfo?: string | null,
      personalInfo?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      userPeopleId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PeopleByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPersonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PeopleByUserIDQuery = {
  peopleByUserID?:  {
    __typename: "ModelPersonConnection",
    items:  Array< {
      __typename: "Person",
      id: string,
      category: string,
      name: string,
      contactInfo?: string | null,
      schoolInfo?: string | null,
      collegeInfo?: string | null,
      jobInfo?: string | null,
      bankInfo?: string | null,
      financialInfo?: string | null,
      personalInfo?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      userPeopleId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBusinessQueryVariables = {
  id: string,
};

export type GetBusinessQuery = {
  getBusiness?:  {
    __typename: "Business",
    id: string,
    category: string,
    name: string,
    contactInfo?: string | null,
    pastOrderInfo?: string | null,
    financialInfo?: string | null,
    previousJobInfo?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBusinessesId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListBusinessesQueryVariables = {
  filter?: ModelBusinessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBusinessesQuery = {
  listBusinesses?:  {
    __typename: "ModelBusinessConnection",
    items:  Array< {
      __typename: "Business",
      id: string,
      category: string,
      name: string,
      contactInfo?: string | null,
      pastOrderInfo?: string | null,
      financialInfo?: string | null,
      previousJobInfo?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      userBusinessesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BusinessesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBusinessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BusinessesByUserIDQuery = {
  businessesByUserID?:  {
    __typename: "ModelBusinessConnection",
    items:  Array< {
      __typename: "Business",
      id: string,
      category: string,
      name: string,
      contactInfo?: string | null,
      pastOrderInfo?: string | null,
      financialInfo?: string | null,
      previousJobInfo?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      userBusinessesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phone?: string | null,
    dob?: string | null,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    people?:  {
      __typename: "ModelPersonConnection",
      nextToken?: string | null,
    } | null,
    businesses?:  {
      __typename: "ModelBusinessConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phone?: string | null,
    dob?: string | null,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    people?:  {
      __typename: "ModelPersonConnection",
      nextToken?: string | null,
    } | null,
    businesses?:  {
      __typename: "ModelBusinessConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phone?: string | null,
    dob?: string | null,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    people?:  {
      __typename: "ModelPersonConnection",
      nextToken?: string | null,
    } | null,
    businesses?:  {
      __typename: "ModelBusinessConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePropertySubscriptionVariables = {
  filter?: ModelSubscriptionPropertyFilterInput | null,
  owner?: string | null,
};

export type OnCreatePropertySubscription = {
  onCreateProperty?:  {
    __typename: "Property",
    id: string,
    type: string,
    address: string,
    mortgage?: string | null,
    rent?: string | null,
    insurance?: string | null,
    homeWarranty?: string | null,
    applianceInfo?: string | null,
    repairInfo?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePropertySubscriptionVariables = {
  filter?: ModelSubscriptionPropertyFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePropertySubscription = {
  onUpdateProperty?:  {
    __typename: "Property",
    id: string,
    type: string,
    address: string,
    mortgage?: string | null,
    rent?: string | null,
    insurance?: string | null,
    homeWarranty?: string | null,
    applianceInfo?: string | null,
    repairInfo?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePropertySubscriptionVariables = {
  filter?: ModelSubscriptionPropertyFilterInput | null,
  owner?: string | null,
};

export type OnDeletePropertySubscription = {
  onDeleteProperty?:  {
    __typename: "Property",
    id: string,
    type: string,
    address: string,
    mortgage?: string | null,
    rent?: string | null,
    insurance?: string | null,
    homeWarranty?: string | null,
    applianceInfo?: string | null,
    repairInfo?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
  owner?: string | null,
};

export type OnCreateItemSubscription = {
  onCreateItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    make?: string | null,
    material?: string | null,
    purchaseYear?: number | null,
    warrantyExpiry?: string | null,
    tags?: Array< string | null > | null,
    location?: string | null,
    propertyID: string,
    property?:  {
      __typename: "Property",
      id: string,
      type: string,
      address: string,
      mortgage?: string | null,
      rent?: string | null,
      insurance?: string | null,
      homeWarranty?: string | null,
      applianceInfo?: string | null,
      repairInfo?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
  owner?: string | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    make?: string | null,
    material?: string | null,
    purchaseYear?: number | null,
    warrantyExpiry?: string | null,
    tags?: Array< string | null > | null,
    location?: string | null,
    propertyID: string,
    property?:  {
      __typename: "Property",
      id: string,
      type: string,
      address: string,
      mortgage?: string | null,
      rent?: string | null,
      insurance?: string | null,
      homeWarranty?: string | null,
      applianceInfo?: string | null,
      repairInfo?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
  owner?: string | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    make?: string | null,
    material?: string | null,
    purchaseYear?: number | null,
    warrantyExpiry?: string | null,
    tags?: Array< string | null > | null,
    location?: string | null,
    propertyID: string,
    property?:  {
      __typename: "Property",
      id: string,
      type: string,
      address: string,
      mortgage?: string | null,
      rent?: string | null,
      insurance?: string | null,
      homeWarranty?: string | null,
      applianceInfo?: string | null,
      repairInfo?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePersonSubscriptionVariables = {
  filter?: ModelSubscriptionPersonFilterInput | null,
  owner?: string | null,
};

export type OnCreatePersonSubscription = {
  onCreatePerson?:  {
    __typename: "Person",
    id: string,
    category: string,
    name: string,
    contactInfo?: string | null,
    schoolInfo?: string | null,
    collegeInfo?: string | null,
    jobInfo?: string | null,
    bankInfo?: string | null,
    financialInfo?: string | null,
    personalInfo?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPeopleId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdatePersonSubscriptionVariables = {
  filter?: ModelSubscriptionPersonFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePersonSubscription = {
  onUpdatePerson?:  {
    __typename: "Person",
    id: string,
    category: string,
    name: string,
    contactInfo?: string | null,
    schoolInfo?: string | null,
    collegeInfo?: string | null,
    jobInfo?: string | null,
    bankInfo?: string | null,
    financialInfo?: string | null,
    personalInfo?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPeopleId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeletePersonSubscriptionVariables = {
  filter?: ModelSubscriptionPersonFilterInput | null,
  owner?: string | null,
};

export type OnDeletePersonSubscription = {
  onDeletePerson?:  {
    __typename: "Person",
    id: string,
    category: string,
    name: string,
    contactInfo?: string | null,
    schoolInfo?: string | null,
    collegeInfo?: string | null,
    jobInfo?: string | null,
    bankInfo?: string | null,
    financialInfo?: string | null,
    personalInfo?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPeopleId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateBusinessSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessFilterInput | null,
  owner?: string | null,
};

export type OnCreateBusinessSubscription = {
  onCreateBusiness?:  {
    __typename: "Business",
    id: string,
    category: string,
    name: string,
    contactInfo?: string | null,
    pastOrderInfo?: string | null,
    financialInfo?: string | null,
    previousJobInfo?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBusinessesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateBusinessSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBusinessSubscription = {
  onUpdateBusiness?:  {
    __typename: "Business",
    id: string,
    category: string,
    name: string,
    contactInfo?: string | null,
    pastOrderInfo?: string | null,
    financialInfo?: string | null,
    previousJobInfo?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBusinessesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteBusinessSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBusinessSubscription = {
  onDeleteBusiness?:  {
    __typename: "Business",
    id: string,
    category: string,
    name: string,
    contactInfo?: string | null,
    pastOrderInfo?: string | null,
    financialInfo?: string | null,
    previousJobInfo?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBusinessesId?: string | null,
    owner?: string | null,
  } | null,
};
