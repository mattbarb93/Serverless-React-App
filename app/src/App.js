import React, { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [invoices, setInvoices] = useState([]);

  const body = [
    {
      id: "1",
      Vendor: "Obama",
      Amount: "$20,000",
      Date: "8/22/2022",
    },
    {
      id: "2",
      Vendor: "Biden",
      Amount: "$22,000",
      Date: "8/22/2022",
    },
    {
      id: "3",
      Vendor: "Trump",
      Amount: "$23,000",
      Date: "8/22/2022",
    },
  ];

  if (isLoading) return <div>Loading</div>;

  return (
    <div className="container border border-secondary rounded center">
      <div className="row">
        <div className="col-12">
          <h4>Pending Invoices - The Test Company</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
