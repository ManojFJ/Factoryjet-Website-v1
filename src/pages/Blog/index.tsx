import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import BlogApp from './App';

const Blog: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Blog - Web Development Tips, Trends & Best Practices"
        description="Read the latest insights on web development, e-commerce, SEO, and digital marketing. Expert tips, industry trends, and practical guides from FactoryJet."
        canonical="/blog"
      />
      <Header variant="solid" />
      <BlogApp />
      <Footer />
    </>
  );
};

export default Blog;
