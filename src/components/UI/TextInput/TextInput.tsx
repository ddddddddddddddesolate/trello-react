import { SyntheticEvent, useCallback } from 'react';

import styles from './TextInput.module.scss';

interface Props {
  value: string;

  onChange(event: SyntheticEvent<HTMLInputElement>): void;
}

const TextInput = ({ value, onChange }: Props) => {
  const handleChange = useCallback(
    (event: SyntheticEvent<HTMLInputElement>) => onChange(event),
    [onChange]
  );

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        defaultValue={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextInput;
