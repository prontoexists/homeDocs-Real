import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly phone?: string | null;
  readonly dob?: string | null;
  readonly properties?: (Property | null)[] | null;
  readonly people?: (Person | null)[] | null;
  readonly businesses?: (Business | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly phone?: string | null;
  readonly dob?: string | null;
  readonly properties: AsyncCollection<Property>;
  readonly people: AsyncCollection<Person>;
  readonly businesses: AsyncCollection<Business>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerProperty = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Property, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: string;
  readonly address: string;
  readonly mortgage?: string | null;
  readonly rent?: string | null;
  readonly insurance?: string | null;
  readonly homeWarranty?: string | null;
  readonly applianceInfo?: string | null;
  readonly repairInfo?: string | null;
  readonly items?: (Item | null)[] | null;
  readonly userID: string;
  readonly user?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProperty = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Property, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: string;
  readonly address: string;
  readonly mortgage?: string | null;
  readonly rent?: string | null;
  readonly insurance?: string | null;
  readonly homeWarranty?: string | null;
  readonly applianceInfo?: string | null;
  readonly repairInfo?: string | null;
  readonly items: AsyncCollection<Item>;
  readonly userID: string;
  readonly user: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Property = LazyLoading extends LazyLoadingDisabled ? EagerProperty : LazyProperty

export declare const Property: (new (init: ModelInit<Property>) => Property) & {
  copyOf(source: Property, mutator: (draft: MutableModel<Property>) => MutableModel<Property> | void): Property;
}

type EagerItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly make?: string | null;
  readonly material?: string | null;
  readonly purchaseYear?: number | null;
  readonly warrantyExpiry?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly location?: string | null;
  readonly propertyID: string;
  readonly property?: Property | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly make?: string | null;
  readonly material?: string | null;
  readonly purchaseYear?: number | null;
  readonly warrantyExpiry?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly location?: string | null;
  readonly propertyID: string;
  readonly property: AsyncItem<Property | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Item = LazyLoading extends LazyLoadingDisabled ? EagerItem : LazyItem

export declare const Item: (new (init: ModelInit<Item>) => Item) & {
  copyOf(source: Item, mutator: (draft: MutableModel<Item>) => MutableModel<Item> | void): Item;
}

type EagerPerson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Person, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly category: string;
  readonly name: string;
  readonly contactInfo?: string | null;
  readonly schoolInfo?: string | null;
  readonly collegeInfo?: string | null;
  readonly jobInfo?: string | null;
  readonly bankInfo?: string | null;
  readonly financialInfo?: string | null;
  readonly personalInfo?: string | null;
  readonly userID: string;
  readonly user?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userPeopleId?: string | null;
}

type LazyPerson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Person, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly category: string;
  readonly name: string;
  readonly contactInfo?: string | null;
  readonly schoolInfo?: string | null;
  readonly collegeInfo?: string | null;
  readonly jobInfo?: string | null;
  readonly bankInfo?: string | null;
  readonly financialInfo?: string | null;
  readonly personalInfo?: string | null;
  readonly userID: string;
  readonly user: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userPeopleId?: string | null;
}

export declare type Person = LazyLoading extends LazyLoadingDisabled ? EagerPerson : LazyPerson

export declare const Person: (new (init: ModelInit<Person>) => Person) & {
  copyOf(source: Person, mutator: (draft: MutableModel<Person>) => MutableModel<Person> | void): Person;
}

type EagerBusiness = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Business, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly category: string;
  readonly name: string;
  readonly contactInfo?: string | null;
  readonly pastOrderInfo?: string | null;
  readonly financialInfo?: string | null;
  readonly previousJobInfo?: string | null;
  readonly userID: string;
  readonly user?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userBusinessesId?: string | null;
}

type LazyBusiness = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Business, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly category: string;
  readonly name: string;
  readonly contactInfo?: string | null;
  readonly pastOrderInfo?: string | null;
  readonly financialInfo?: string | null;
  readonly previousJobInfo?: string | null;
  readonly userID: string;
  readonly user: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userBusinessesId?: string | null;
}

export declare type Business = LazyLoading extends LazyLoadingDisabled ? EagerBusiness : LazyBusiness

export declare const Business: (new (init: ModelInit<Business>) => Business) & {
  copyOf(source: Business, mutator: (draft: MutableModel<Business>) => MutableModel<Business> | void): Business;
}