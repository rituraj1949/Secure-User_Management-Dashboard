import React, { FC, ReactNode } from 'react';
interface FormProps {
 children: ReactNode;
 onSubmit: () => void;
}
const Form: FC<FormProps> = ({ children, onSubmit }) => {
 return (
 <form onSubmit={onSubmit}>
 {children}
 </form>
 );
};
export default Form;