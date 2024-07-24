import React from "react";
import { Table, Pagination, Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const users = [
  {
    id: 1,
    name: "Michael Holz",
    dateCreated: "04/10/2013",
    role: "Admin",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Paula Wilson",
    dateCreated: "05/08/2014",
    role: "Publisher",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 3,
    name: "Antonio Moreno",
    dateCreated: "11/05/2015",
    role: "Publisher",
    status: "Suspended",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 4,
    name: "Mary Saveley",
    dateCreated: "06/09/2016",
    role: "Reviewer",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 5,
    name: "Martin Sommer",
    dateCreated: "12/08/2017",
    role: "Moderator",
    status: "Inactive",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Home = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <Table responsive bordered >
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Date Created</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td className="d-flex align-items-center">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="rounded-circle"
                      style={{ width: "40px", marginRight: "10px" }}
                    />
                    {user.name}
                  </td>
                  <td>{user.dateCreated}</td>
                  <td>{user.role}</td>
                  <td>
                    <span
                      style={{
                        color:
                          user.status === "Active"
                            ? "green"
                            : user.status === "Suspended"
                            ? "red"
                            : "orange",
                      }}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="d-flex justify-content-center">
                    <Button variant="outline-primary" size="sm" className="me-2">
                      <i className="fas fa-cog"></i>
                    </Button>
                    <Button variant="outline-danger" size="sm">
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination className="justify-content-center">
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
