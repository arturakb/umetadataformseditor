// utils/example-registry.ts
import ex1_1 from '../examples/real-dataset-metadata-v1.0.0-ptb-xl.json';
import ex1_2 from '../examples/real-dataset-metadata-v1.0.0-ds003844.json';

import ex2_1 from '../examples/dataset-metadata-schema-real-ptb-xl.json';
import ex2_2 from '../examples/dataset-metadata-schema-real-ds003844.json';

export type Example = {
  key: string;
  label: string;
  data: Record<string, any>
};

const EXAMPLESREG: Record<string, Example[]> = {
  'real-dataset-metadata/v1.0.0.json': [
    {
      key: 'ex1_1',
      label: 'ECG Dataset',
      data: ex1_1 as any
    },
    {
      key: 'ex1_2',
      label: 'iEEG Dataset',
      data: ex1_2 as any
    }
  ],
  'dataset-metadata-schema-real.json': [
    {
      key: 'ex2_1',
      label: 'ECG Dataset',
      data: ex2_1 as any
    },
    {
      key: 'ex2_2',
      label: 'iEEG Dataset',
      data: ex2_2 as any
    }
  ]
}

export default EXAMPLESREG;
