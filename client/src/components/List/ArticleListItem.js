import React from 'react';

export const ArticleListItem = ({ children }) => {
  return (
    <div className="border-left 
                    border-primary 
                    p-1 
                    mb-1 
                    bg-light">
      {children}
    </div>
  );
};
