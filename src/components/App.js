
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <PageLayout
          header="Welcome to my website"

          children="This is the content of my website." 

          footer= "&copy; 2023 My Website. All rights reserved."
        />
    </div>
  )
}

export default App
