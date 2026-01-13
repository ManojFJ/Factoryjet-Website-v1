import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CaseStudyPage } from './components/CaseStudyPage';
import { CASE_STUDIES } from './constants';

const Detail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const caseStudy = CASE_STUDIES.find(c => c.slug === slug);

  useEffect(() => {
    if (!caseStudy) {
      navigate('/case');
    }
  }, [caseStudy, navigate]);

  const handleBack = () => {
    navigate('/case');
  };

  if (!caseStudy) {
    return null;
  }

  return <CaseStudyPage caseStudy={caseStudy} onBack={handleBack} />;
};

export default Detail;