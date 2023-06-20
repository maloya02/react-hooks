import React, { useState } from 'react'
import ProductPage2 from './ProductPage2';

const AAuseCallBack4 = () => {
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
        
        <ProductPage2
          referrerId="wizard_of_oz"
          productId={123}
          theme={isDark ? 'dark' : 'light'}
        />
      </>
    );
  }
export default AAuseCallBack4