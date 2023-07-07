import React, { FC, HTMLAttributes } from 'react';
import styles from './style.module.css'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: React.ReactNode;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Heading: FC<Props> = ({ children }) => {
  return <div className={styles.header}>{children || `the snozzberries taste like snozzberries`}</div>;
};