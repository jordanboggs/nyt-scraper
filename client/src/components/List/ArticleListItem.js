import React from 'react';

export const ArticleListItem = ({ children }) => {
  return (
    <div>
      <ul className="list-group-item">
        {children}
      </ul>
    </div>
  );
};
