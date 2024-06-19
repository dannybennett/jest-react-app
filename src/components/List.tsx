import Table from "react-bootstrap/Table";
import IAppliance from "../types/appliance.type";

function List({ data }: { data: Array<IAppliance> }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>brand</th>
          <th>equipment</th>
        </tr>
      </thead>
      <tbody>
        {data.map((appliance: IAppliance) => (
          <tr>
            <td>{appliance.id}</td>
            <td>{appliance.brand}</td>
            <td>{appliance.equipment}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default List;
