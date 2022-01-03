
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Table, Button} from 'reactstrap';
function Customer(){

    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9000/api/customer').then( res => {
            setCustomers(res.data.data);
        })
    }, [])
    return (
        
        <Table>
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
              CustomerName
              </th>
              <th>
              ContactName
              </th>
              <th>
              Address
              </th>
            </tr>
          </thead>
          <tbody>
              {customers.map(customer => (
                <tr>
                    <th scope="row">
                        {customer.index}
                    </th>
                    <td>
                        {customer.CustomerName}     
                    </td>
                    <td>
                        {customer.ContactName}
                    </td>
                    <td>
                        {customer.Address}
                    </td>
                    <td><Button color="primary" outline >Edit</Button></td>
                </tr>
              ))}                
          </tbody>
        </Table>
    );
}
export default Customer;