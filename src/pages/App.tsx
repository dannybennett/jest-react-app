import { useState, useEffect } from "react";
import "../App.css";

import fetchAppliances from "../services/appliance.service";

import IAppliance from "../types/appliance.type";
import Tiles from "../components/Tiles";
// import DataList from "../components/DataList";

import Table from "react-bootstrap/Table";

function App() {
  const [appliances, setAppliances] = useState<Array<IAppliance>>([]);

  useEffect(() => {
    const getAppliance = async () => {
      const _appliances = await fetchAppliances();
      setAppliances(_appliances);
    };

    getAppliance();
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>brand</th>
            <th>equipment</th>
          </tr>
        </thead>
        <tbody>
          {appliances.map((appliance: IAppliance) => (
            <tr>
              <td>{appliance.id}</td>
              <td>{appliance.brand}</td>
              <td>{appliance.equipment}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Tiles />
    </>
  );
}

export default App;
