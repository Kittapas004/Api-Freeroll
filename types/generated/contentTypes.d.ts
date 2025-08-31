import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiBatchBatch extends Struct.CollectionTypeSchema {
  collectionName: 'batches';
  info: {
    description: '';
    displayName: 'Batch';
    pluralName: 'batches';
    singularName: 'batch';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Batch_id: Schema.Attribute.String;
    Batch_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Batch_Status: Schema.Attribute.Enumeration<
      [
        'Completed Successfully',
        'Pending Actions',
        'Issues Detected',
        'Completed Past Data',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Cultivation_Method: Schema.Attribute.String;
    Date_of_Planting: Schema.Attribute.Date;
    factory_submissions: Schema.Attribute.Relation<
      'oneToMany',
      'api::factory-submission.factory-submission'
    >;
    Farm: Schema.Attribute.Relation<'manyToOne', 'api::farm.farm'>;
    fertilizer_records: Schema.Attribute.Relation<
      'oneToMany',
      'api::fertilizer-record.fertilizer-record'
    >;
    harvest_records: Schema.Attribute.Relation<
      'oneToMany',
      'api::harvest-record.harvest-record'
    >;
    Labor_Cost: Schema.Attribute.Decimal;
    lab_submission_records: Schema.Attribute.Relation<
      'oneToMany',
      'api::lab-submission-record.lab-submission-record'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::batch.batch'> &
      Schema.Attribute.Private;
    Material_Cost: Schema.Attribute.Decimal;
    notifications: Schema.Attribute.Relation<
      'oneToMany',
      'api::notification.notification'
    >;
    Other_Costs: Schema.Attribute.Decimal;
    Plant_Variety: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    quality_notification: Schema.Attribute.Relation<
      'manyToOne',
      'api::quality-notification.quality-notification'
    >;
    Soil_pH: Schema.Attribute.Decimal;
    Soil_Quality: Schema.Attribute.String;
    Total_Planting_Cost: Schema.Attribute.Decimal;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    user_documentId: Schema.Attribute.String;
    Water_Source: Schema.Attribute.String;
  };
}

export interface ApiExportHistoryExportHistory
  extends Struct.CollectionTypeSchema {
  collectionName: 'export_histories';
  info: {
    description: '';
    displayName: 'Export_History';
    pluralName: 'export-histories';
    singularName: 'export-history';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    batch_ids: Schema.Attribute.JSON;
    batch_name: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    export_date: Schema.Attribute.Date;
    exported: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    exported_by: Schema.Attribute.String;
    export_status: Schema.Attribute.String;
    farm_name: Schema.Attribute.String;
    lab: Schema.Attribute.Relation<'oneToOne', 'api::lab.lab'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::export-history.export-history'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    quality_grade: Schema.Attribute.String;
    test_type: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    yield: Schema.Attribute.Integer;
    yield_unit: Schema.Attribute.String;
  };
}

export interface ApiFactoryProcessingFactoryProcessing
  extends Struct.CollectionTypeSchema {
  collectionName: 'factory_processings';
  info: {
    displayName: 'Factory_Processing';
    pluralName: 'factory-processings';
    singularName: 'factory-processing';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Attachments: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Batch_Id: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Date_Processed: Schema.Attribute.DateTime;
    Date_Received: Schema.Attribute.DateTime;
    factory: Schema.Attribute.Relation<'manyToOne', 'api::factory.factory'>;
    factory_submission: Schema.Attribute.Relation<
      'manyToOne',
      'api::factory-submission.factory-submission'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::factory-processing.factory-processing'
    > &
      Schema.Attribute.Private;
    Note: Schema.Attribute.String;
    Output_Capsules: Schema.Attribute.Decimal;
    Output_Essential_Oil: Schema.Attribute.Decimal;
    Processed_By: Schema.Attribute.String;
    Processing_Status: Schema.Attribute.Enumeration<
      ['Received', 'Processing', 'Completed']
    >;
    publishedAt: Schema.Attribute.DateTime;
    Turmeric_Utilization_Remaining: Schema.Attribute.Decimal;
    Turmeric_Utilization_Used: Schema.Attribute.Decimal;
    Turmeric_Utilization_Waste: Schema.Attribute.Decimal;
    Unit: Schema.Attribute.Enumeration<['kg', 'g', 'ton']>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFactorySubmissionFactorySubmission
  extends Struct.CollectionTypeSchema {
  collectionName: 'factory_submissions';
  info: {
    description: '';
    displayName: 'Factory_Submission';
    pluralName: 'factory-submissions';
    singularName: 'factory-submission';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    batch: Schema.Attribute.Relation<'manyToOne', 'api::batch.batch'>;
    Batch_id: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Date: Schema.Attribute.DateTime;
    factory: Schema.Attribute.Relation<'manyToOne', 'api::factory.factory'>;
    factory_processings: Schema.Attribute.Relation<
      'oneToMany',
      'api::factory-processing.factory-processing'
    >;
    Farm_Name: Schema.Attribute.String;
    harvest_records: Schema.Attribute.Relation<
      'oneToMany',
      'api::harvest-record.harvest-record'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::factory-submission.factory-submission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    Quality_Grade: Schema.Attribute.String;
    Submission_status: Schema.Attribute.Enumeration<
      ['Completed', 'Waiting', 'Pending']
    >;
    Test_Type: Schema.Attribute.String;
    Unit: Schema.Attribute.Enumeration<['kg', 'g']>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user_documentId: Schema.Attribute.String;
    Yield: Schema.Attribute.Integer;
  };
}

export interface ApiFactoryFactory extends Struct.CollectionTypeSchema {
  collectionName: 'factories';
  info: {
    description: '';
    displayName: 'Factory';
    pluralName: 'factories';
    singularName: 'factory';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Capacity_per_day: Schema.Attribute.Decimal;
    Contact_person: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Email: Schema.Attribute.Email;
    exported: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Factory_address: Schema.Attribute.Text;
    Factory_Name: Schema.Attribute.String;
    factory_processings: Schema.Attribute.Relation<
      'oneToMany',
      'api::factory-processing.factory-processing'
    >;
    factory_submissions: Schema.Attribute.Relation<
      'oneToMany',
      'api::factory-submission.factory-submission'
    >;
    Factory_type: Schema.Attribute.Enumeration<
      ['Processing', 'Packaging', 'Extraction', 'Full_Service']
    > &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::factory.factory'
    > &
      Schema.Attribute.Private;
    Phone: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    Specialization: Schema.Attribute.Enumeration<
      ['Capsules', 'Essential_Oil', 'Powder', 'Extract', 'All']
    > &
      Schema.Attribute.Required;
    Status: Schema.Attribute.Enumeration<
      ['Active', 'Inactive', 'Maintenance']
    > &
      Schema.Attribute.DefaultTo<'Active'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users_permissions_users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ApiFarmFarm extends Struct.CollectionTypeSchema {
  collectionName: 'farms';
  info: {
    description: '';
    displayName: 'Farm';
    pluralName: 'farms';
    singularName: 'farm';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    batches: Schema.Attribute.Relation<'oneToMany', 'api::batch.batch'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Crop_Type: Schema.Attribute.Enumeration<['Turmeric', 'Special Turmeric']>;
    Cultivation_Method: Schema.Attribute.Enumeration<
      ['Organic', 'Conventional']
    >;
    Farm_Address: Schema.Attribute.String;
    Farm_Name: Schema.Attribute.String;
    Farm_Size: Schema.Attribute.Decimal;
    Farm_Size_Unit: Schema.Attribute.Enumeration<['Acres', 'Rai']>;
    Farm_Status: Schema.Attribute.Enumeration<
      ['Planted', 'Fertilized', 'Harvested', 'End Planted']
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::farm.farm'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    user_documentId: Schema.Attribute.String;
  };
}

export interface ApiFarmerNotificationFarmerNotification
  extends Struct.CollectionTypeSchema {
  collectionName: 'farmer_notifications';
  info: {
    description: '';
    displayName: 'Farmer_Notification  ';
    pluralName: 'farmer-notifications';
    singularName: 'farmer-notification';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    batch_id: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    farmer_email: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::farmer-notification.farmer-notification'
    > &
      Schema.Attribute.Private;
    message: Schema.Attribute.String;
    notification_sent: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    publishedAt: Schema.Attribute.DateTime;
    read_status: Schema.Attribute.Boolean;
    sent_date: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFertilizerRecordFertilizerRecord
  extends Struct.CollectionTypeSchema {
  collectionName: 'fertilizer_records';
  info: {
    description: '';
    displayName: 'Fertilizer_Record';
    pluralName: 'fertilizer-records';
    singularName: 'fertilizer-record';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Application_Labor_Cost: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    batch: Schema.Attribute.Relation<'manyToOne', 'api::batch.batch'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Date: Schema.Attribute.DateTime;
    Fertilizer_Cost: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    Fertilizer_type: Schema.Attribute.Enumeration<['Organic', 'Conventional']>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fertilizer-record.fertilizer-record'
    > &
      Schema.Attribute.Private;
    Method: Schema.Attribute.Enumeration<['Spray', 'Broadcast']>;
    Note: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    Quantity_applied: Schema.Attribute.Decimal;
    Quantity_applied_unit: Schema.Attribute.Enumeration<['kg', 'g']>;
    Size: Schema.Attribute.Decimal;
    Total_Fertilizer_Cost: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHarvestRecordHarvestRecord
  extends Struct.CollectionTypeSchema {
  collectionName: 'harvest_records';
  info: {
    description: '';
    displayName: 'Harvest_Record';
    pluralName: 'harvest-records';
    singularName: 'harvest-record';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    batch: Schema.Attribute.Relation<'manyToOne', 'api::batch.batch'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Curcumin_quality: Schema.Attribute.Decimal;
    Date: Schema.Attribute.DateTime;
    equipment_cost: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    factory_submission: Schema.Attribute.Relation<
      'manyToOne',
      'api::factory-submission.factory-submission'
    >;
    Harvest_status: Schema.Attribute.Enumeration<
      ['Completed', 'Pending', 'Failed', 'Waiting']
    >;
    kamincal_analytical_instrument: Schema.Attribute.Enumeration<
      ['UV-Vis', 'LED']
    >;
    kamincal_average_od: Schema.Attribute.Decimal;
    kamincal_concentration: Schema.Attribute.Decimal;
    kamincal_curcuminoid_content: Schema.Attribute.Enumeration<
      ['Pass', 'Fail']
    >;
    kamincal_curcuminoid_percentage: Schema.Attribute.Decimal;
    kamincal_first_time: Schema.Attribute.Decimal;
    kamincal_number_of_replications: Schema.Attribute.Integer;
    kamincal_plant_weight: Schema.Attribute.Decimal;
    kamincal_sample_name: Schema.Attribute.String;
    kamincal_second_time: Schema.Attribute.Decimal;
    kamincal_solvent_volume: Schema.Attribute.Decimal;
    kamincal_third_time: Schema.Attribute.Decimal;
    labor_cost: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    lab_submission_record: Schema.Attribute.Relation<
      'oneToOne',
      'api::lab-submission-record.lab-submission-record'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::harvest-record.harvest-record'
    > &
      Schema.Attribute.Private;
    Method: Schema.Attribute.Enumeration<
      ['Manual Harvesting', 'Machine Harvesting']
    >;
    Note: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    quality_grade: Schema.Attribute.Enumeration<
      ['Grade A', 'Grade B', 'Grade C', 'Grade D', 'Grade F']
    >;
    Result_type: Schema.Attribute.Enumeration<['UV-Vis', 'LED']>;
    Submission_status: Schema.Attribute.Enumeration<
      ['Completed', 'Pending', 'Failed', 'Waiting']
    >;
    total_harvest_cost: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    yleld: Schema.Attribute.Decimal;
    Yleld_unit: Schema.Attribute.Enumeration<['kg', 'g']>;
  };
}

export interface ApiLabSubmissionRecordLabSubmissionRecord
  extends Struct.CollectionTypeSchema {
  collectionName: 'lab_submission_records';
  info: {
    description: '';
    displayName: 'Lab_Submission_Record';
    pluralName: 'lab-submission-records';
    singularName: 'lab-submission-record';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    batch: Schema.Attribute.Relation<'manyToOne', 'api::batch.batch'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    curcumin_quality: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      >;
    Date: Schema.Attribute.DateTime;
    export_date: Schema.Attribute.DateTime;
    exported: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    export_status: Schema.Attribute.Enumeration<
      ['Pending Export', 'Exported', 'Export Failed']
    > &
      Schema.Attribute.DefaultTo<'Pending Export'>;
    harvest_record: Schema.Attribute.Relation<
      'oneToOne',
      'api::harvest-record.harvest-record'
    >;
    hplc_analyst_name: Schema.Attribute.String;
    hplc_bdmc_result: Schema.Attribute.String;
    hplc_certificate_number: Schema.Attribute.String;
    hplc_cur_result: Schema.Attribute.String;
    hplc_dmc_result: Schema.Attribute.String;
    hplc_laboratory: Schema.Attribute.String;
    hplc_laboratory_address: Schema.Attribute.String;
    hplc_laboratory_phone: Schema.Attribute.String;
    hplc_method_details: Schema.Attribute.String;
    hplc_method_reference: Schema.Attribute.String;
    hplc_moisture_quantity: Schema.Attribute.String;
    hplc_quality_assessment: Schema.Attribute.Enumeration<['Pass', 'Fail']>;
    hplc_quantity: Schema.Attribute.String;
    hplc_report_code: Schema.Attribute.String;
    hplc_reviewer_name: Schema.Attribute.String;
    hplc_sample_amount: Schema.Attribute.String;
    hplc_sample_code: Schema.Attribute.String;
    hplc_sample_condition: Schema.Attribute.String;
    hplc_sample_name: Schema.Attribute.String;
    hplc_sample_preparation: Schema.Attribute.String;
    hplc_scientific_name: Schema.Attribute.String;
    hplc_temperature: Schema.Attribute.String;
    hplc_test_date: Schema.Attribute.Date;
    hplc_testing_no: Schema.Attribute.String;
    hplc_total_curcuminoids: Schema.Attribute.String;
    inspector_notes: Schema.Attribute.Text;
    kamincal_analytical_instrument: Schema.Attribute.Enumeration<
      ['NIR', 'HPLC', 'UV-Vis']
    >;
    kamincal_average_od: Schema.Attribute.Decimal;
    kamincal_concentration: Schema.Attribute.Decimal;
    kamincal_curcuminoid_content: Schema.Attribute.Enumeration<
      ['Pass', 'Fail']
    >;
    kamincal_curcuminoid_percentage: Schema.Attribute.Decimal;
    kamincal_first_time: Schema.Attribute.Decimal;
    kamincal_number_of_replications: Schema.Attribute.Integer;
    kamincal_plant_weight: Schema.Attribute.Decimal;
    kamincal_sample_name: Schema.Attribute.String;
    kamincal_second_time: Schema.Attribute.Decimal;
    kamincal_solvent_volume: Schema.Attribute.Decimal;
    kamincal_third_time: Schema.Attribute.Decimal;
    lab: Schema.Attribute.Relation<'manyToOne', 'api::lab.lab'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::lab-submission-record.lab-submission-record'
    > &
      Schema.Attribute.Private;
    moisture_quality: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      >;
    notification_status: Schema.Attribute.Enumeration<['read', 'unread']> &
      Schema.Attribute.DefaultTo<'unread'>;
    publishedAt: Schema.Attribute.DateTime;
    Quality_grade: Schema.Attribute.Enumeration<
      ['Grade A', 'Grade B', 'Grade C', 'Grade D', 'Grade F']
    >;
    Report: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    result_image: Schema.Attribute.Media<'images' | 'files'>;
    Result_type: Schema.Attribute.Enumeration<
      ['NIR Spectroscopy', 'HPLC', 'UV-Vis']
    >;
    Submission_status: Schema.Attribute.Enumeration<
      ['Completed', 'Pending', 'Draft', 'Failed', 'Waiting', 'Ready for Export']
    >;
    test_date: Schema.Attribute.Date;
    testing_method: Schema.Attribute.Enumeration<
      ['NIR Spectroscopy', 'HPLC', 'UV-Vis']
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLabLab extends Struct.CollectionTypeSchema {
  collectionName: 'labs';
  info: {
    description: '';
    displayName: 'Lab';
    pluralName: 'labs';
    singularName: 'lab';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    exported: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Lab_Name: Schema.Attribute.String;
    lab_submission_records: Schema.Attribute.Relation<
      'oneToMany',
      'api::lab-submission-record.lab-submission-record'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::lab.lab'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users_permissions_users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ApiNotificationNotification
  extends Struct.CollectionTypeSchema {
  collectionName: 'notifications';
  info: {
    description: '';
    displayName: 'Notification';
    pluralName: 'notifications';
    singularName: 'notification';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    batch: Schema.Attribute.Relation<'manyToOne', 'api::batch.batch'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Date: Schema.Attribute.DateTime;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::notification.notification'
    > &
      Schema.Attribute.Private;
    Notification_status: Schema.Attribute.Enumeration<
      ['Warning', 'Succeed', 'Failed', 'General']
    >;
    publishedAt: Schema.Attribute.DateTime;
    Text: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user_documentId: Schema.Attribute.String;
  };
}

export interface ApiQualityNotificationQualityNotification
  extends Struct.CollectionTypeSchema {
  collectionName: 'quality_notifications';
  info: {
    description: '';
    displayName: 'Quality_Notification';
    pluralName: 'quality-notifications';
    singularName: 'quality-notification';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    batches: Schema.Attribute.Relation<'oneToMany', 'api::batch.batch'>;
    batch_id: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Date: Schema.Attribute.DateTime;
    lab_submission_records: Schema.Attribute.Relation<
      'oneToMany',
      'api::lab-submission-record.lab-submission-record'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::quality-notification.quality-notification'
    > &
      Schema.Attribute.Private;
    Notification_status: Schema.Attribute.Enumeration<['unread', 'read']>;
    notification_type: Schema.Attribute.Enumeration<
      ['pass', 'fail', 'pending', 'alert']
    >;
    publishedAt: Schema.Attribute.DateTime;
    Text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user_documentId: Schema.Attribute.String;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    batches: Schema.Attribute.Relation<'oneToMany', 'api::batch.batch'>;
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    factory: Schema.Attribute.Relation<'manyToOne', 'api::factory.factory'>;
    farms: Schema.Attribute.Relation<'oneToMany', 'api::farm.farm'>;
    lab: Schema.Attribute.Relation<'manyToOne', 'api::lab.lab'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    phone: Schema.Attribute.String;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    user_role: Schema.Attribute.Enumeration<
      ['Quality Inspection', 'Farmer', 'Factory', 'Custumer', 'Admin']
    > &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::batch.batch': ApiBatchBatch;
      'api::export-history.export-history': ApiExportHistoryExportHistory;
      'api::factory-processing.factory-processing': ApiFactoryProcessingFactoryProcessing;
      'api::factory-submission.factory-submission': ApiFactorySubmissionFactorySubmission;
      'api::factory.factory': ApiFactoryFactory;
      'api::farm.farm': ApiFarmFarm;
      'api::farmer-notification.farmer-notification': ApiFarmerNotificationFarmerNotification;
      'api::fertilizer-record.fertilizer-record': ApiFertilizerRecordFertilizerRecord;
      'api::harvest-record.harvest-record': ApiHarvestRecordHarvestRecord;
      'api::lab-submission-record.lab-submission-record': ApiLabSubmissionRecordLabSubmissionRecord;
      'api::lab.lab': ApiLabLab;
      'api::notification.notification': ApiNotificationNotification;
      'api::quality-notification.quality-notification': ApiQualityNotificationQualityNotification;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
