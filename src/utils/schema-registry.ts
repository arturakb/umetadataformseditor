import { RJSFSchema, UiSchema } from '@rjsf/utils';

import datasetV1_0_0 from '../schemas/real-dataset-metadata-v1.0.0.json';
import datasetV1_0_0_Ui from '../uischemas/real-dataset-metadata-uischmea';

import datasetVC from '../schemas/dataset-metadata-schema-real.json';
import datasetVCUi from '../uischemas/dataset-metadata-schema-real-uischema';

export type SchemaKey =
  | 'real-dataset-metadata/v1.0.0.json'
  | 'dataset-metadata-schema-real.json';

// export const DEFAULT_SCHEMA_KEY: SchemaKey = 'real-dataset-metadata/v1.0.0.json';
export const DEFAULT_SCHEMA_KEY: SchemaKey = 'dataset-metadata-schema-real.json';

export type RegistryEntry = {
  label: string;
  schema: RJSFSchema;
  uischema: UiSchema;
};

export type SchemaReg = Record<SchemaKey, RegistryEntry>;

export const SCHEMAREG: SchemaReg = {
  'real-dataset-metadata/v1.0.0.json': {
    label: 'Real Dataset Metadata v1.0.0',
    schema: datasetV1_0_0 as RJSFSchema,
    uischema: datasetV1_0_0_Ui as UiSchema,
  },
  'dataset-metadata-schema-real.json': {
    label: 'Real Dataset Metadata (AISym4Med)',
    schema: datasetVC as RJSFSchema,
    uischema: datasetVCUi as UiSchema,
  },
};

export default SCHEMAREG;
