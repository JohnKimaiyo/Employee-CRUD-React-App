
import { Button, Table } from 'react-bootstrap'
import Employees from '../components/Employees'
import { Fragment } from 'react'
export default function Home() {
    const handleDelete = (id) => {
        var index = Employees.map(function (e) {
            return e.id

        }).indexOf(id);

    }
    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                                ?
                                Employees.map((item) => {
                                    return (
                                        <tr>
                                            <td>
                                                {
                                                    item.Name
                                                }
                                            </td>
                                            <td>
                                                {
                                                    item.Age
                                                }
                                            </td>
                                            <td>
                                                <Button onClick={() => alert(item.id)}>Edit</Button>
                                                &nbsp;
                                                <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "No data available"

                        }
                    </tbody>


                </Table>

            </div>
        </Fragment>
    )
}
