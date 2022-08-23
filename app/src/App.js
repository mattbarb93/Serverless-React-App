import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import {
  faImage,
  faThumbsDown,
  faThumbsUp,
  faMoneyCheckAlt,
  faSearchDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/fontawesome-svg-core";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [invoices, setInvoices] = useState([]);
  // const [invoices, setInvoices] = useState([
  //   {
  //     id: "1",
  //     Vendor: "Obama",
  //     Amount: "$20,000",
  //     Invoice: "1123",
  //     Date: "8/22/2022",
  //   },
  //   {
  //     id: "2",
  //     Vendor: "Biden",
  //     Amount: "$21,000",
  //     Invoice: "1123",
  //     Date: "8/22/2022",
  //   },
  //   {
  //     id: "3",
  //     Vendor: "Trump",
  //     Amount: "$22,000",
  //     Invoice: "1123",
  //     Date: "8/22/2022",
  //   },
  // ]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(
          "https://5eaalscigb.execute-api.us-east-1.amazonaws.com/Dev"
        );
        const body = await response.json();
        setInvoices(body);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      (async () => await fetchAPI())();
    }, 1000);
  }, []);

  if (isLoading) return <div>Loading</div>;

  const handleDelete = (id) => {
    console.log(id);
    let filteredInvoices = invoices.filter((invoice) => invoice.id !== id);
    setInvoices(filteredInvoices);
  };

  const allInvoices = invoices.map((invoice) => {
    return (
      <tr key={invoice.id}>
        <td>{invoice.Vendor}</td>
        <td>{invoice.Date}</td>
        <td>{invoice.Invoice}</td>
        <td>{invoice.Date}</td>
        <td>
          <button onClick={() => handleDelete(`${invoice.id}`)}>aaa</button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container border border-secondary rouded center">
      <div className="row">
        <div className="col-12">
          <h4>Pending Invoices - The Test Company</h4>
        </div>
      </div>

      <div className="row">
        <div className=".col-xs-12 center text-center">
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th scope="row">Vendor</th>
                <th>Amount</th>
                <th>Invoice #</th>
                <th>Date</th>
                <th colSpan="4">Actions</th>
                <th>Image</th>
              </tr>
            </thead>

            <tbody>
              {invoices.length === 0 ? (
                <td colSpan="9">All caught up!</td>
              ) : (
                allInvoices
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default App;
