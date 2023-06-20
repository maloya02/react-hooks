import React, { useState } from 'react'
import ProductPage from './ProductPage';

//Skipping re-rendering with useCallback and memo

const AAuseCallBack3 = () => {
    const [isDark, setIsDark] = useState(false);
    return (
      <>
        <label>
          <input
            type="checkbox"
            checked={isDark}
            onChange={e => setIsDark(e.target.checked)}
          />
          Dark mode
        </label>
        
        <ProductPage
          referrerId="wizard_of_oz"
          productId={123}
          theme={isDark ? 'dark' : 'light'}
        />
      </>
    );
  }

export default AAuseCallBack3