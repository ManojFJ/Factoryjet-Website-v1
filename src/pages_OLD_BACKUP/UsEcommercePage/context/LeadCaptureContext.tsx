import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LeadCaptureContextType {
  isFormOpen: boolean;
  openForm: (initialInterest?: string) => void;
  closeForm: () => void;
  initialInterest: string;
}

const LeadCaptureContext = createContext<LeadCaptureContextType | undefined>(undefined);

export const LeadCaptureProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [initialInterest, setInitialInterest] = useState('');

  const openForm = (interest: string = 'General Inquiry') => {
    setInitialInterest(interest);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setInitialInterest('');
  };

  return (
    <LeadCaptureContext.Provider value={{ isFormOpen, openForm, closeForm, initialInterest }}>
      {children}
    </LeadCaptureContext.Provider>
  );
};

export const useLeadCapture = () => {
  const context = useContext(LeadCaptureContext);
  if (!context) {
    throw new Error('useLeadCapture must be used within a LeadCaptureProvider');
  }
  return context;
};