import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormContextType {
  isFormOpen: boolean;
  openForm: (service?: string) => void;
  closeForm: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = (service?: string) => {
    setIsFormOpen(true);
    // Optional: You could store the selected service in state to pre-fill the form
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <FormContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};