import React from 'react';
import FeatureToggle from './FeatureToggle';

function App() {
  return (
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Feature Toggle Demo</h1>

        <FeatureToggle isEnabled={true} featureName="Dark Mode" />
        <FeatureToggle isEnabled={false} featureName="Notifications" />
        <FeatureToggle isEnabled={true} featureName="Search Functionality" />
        <FeatureToggle isEnabled={false} featureName="Experimental Chat" />
      </div>
  );
}

export default App;

