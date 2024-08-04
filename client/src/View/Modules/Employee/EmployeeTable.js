import React, { useEffect, useState } from "react";
import { Table, Pagination, Navbar, Container, Spinner, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import parseCSV from "./csvParser";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import * as Plotly from "plotly.js-dist";
import regression from "regression";
import { getAllPayrollingData } from "../../../features/payroll/payrollSlice";

function EmployeeTable() {
  document.title = "Employee Table";
  const dispatch = useDispatch();
  const [employeeData, setEmployeeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [recordCount, setRecordCount] = useState(50); // State for the number of records to display
  const { Employees } = useSelector((state) => state.employee);
  const { Payroll } = useSelector((state) => state.payroll);

  useEffect(() => {
    dispatch(getAllPayrollingData());
    const prepareData = async () => {
      try {
        const csv = await parseCSV("/abc.csv");
        setEmployeeData(csv.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error parsing CSV:", error);
        setIsError(true);
        setIsLoading(false);
      }
    };
    prepareData();
  }, [dispatch]);

  const renderScatterWithRegression = (container, data, columns, config) => {
    const xData = data
      .map((r) => parseFloat(r[columns[0]]))
      .filter((x) => !isNaN(x));

    const yData = data
      .map((r) => parseFloat(r[columns[1]]))
      .filter((y) => !isNaN(y));

    const trace = {
      x: xData,
      y: yData,
      mode: "markers",
      type: "scatter",
      opacity: 0.7,
      marker: {
        color: "dodgerblue",
      },
      name: "Data Points",
    };

    const regressionData = xData.map((x, i) => [x, yData[i]]);
    const result = regression.linear(regressionData);
    const { equation } = result;

    const minX = Math.min(...xData);
    const maxX = Math.max(...xData);

    const regressionLine = {
      x: [minX, maxX],
      y: [-equation[0] * minX + equation[1], -equation[0] * maxX + equation[1]],
      mode: "lines",
      type: "scatter",
      line: { color: "red" },
      name: "Regression Line",
    };

    const chartData = [trace, regressionLine];

    Plotly.newPlot(container, chartData, {
      title: config.title,
      xaxis: {
        title: config.xLabel,
      },
      yaxis: { title: config.yLabel },
    });
  };

  useEffect(() => {
    if (employeeData.length) {
      const limitedData = employeeData.slice(0, recordCount);
      renderScatterWithRegression(
        "scatterPlot",
        limitedData,
        ["OverTimeHours", "Salary"],
        {
          title: "Salary vs. OverTime Hours with Regression",
          xLabel: "OverTime Hours",
          yLabel: "Salary",
        }
      );
    }
  }, [employeeData, recordCount]);

  return (
    <main className="main_payrollTable">
      <NavigationTop />
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Employee Table</Navbar.Brand>
        </Navbar>
        {isLoading && (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        )}
        {isError && (
          <div className="alert alert-danger" role="alert">
            Error loading employee data.
          </div>
        )}
        {!isLoading && !isError && (
          <>
            <Form>
              <Form.Group controlId="recordCountInput">
                <Form.Label>Enter Number of Records to Display (Max. 250):</Form.Label>
                <Form.Control
                  type="number"
                  value={recordCount}
                  onChange={(e) => setRecordCount(e.target.value)}
                />
              </Form.Group>
            </Form>
            <div
              id="scatterPlot"
              style={{ width: "100%", height: "500px" }}
            ></div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Employee Name</th>
                  <th>Date</th>
                  <th>Salary</th>
                  <th>Overtime Hours</th>
                </tr>
              </thead>
              <tbody>
                {employeeData.slice(0, recordCount).map((employee, index) => (
                  <tr key={index}>
                    <td>{employee.EmployeeName}</td>
                    <td>{employee.Date}</td>
                    <td>{employee.Salary}</td>
                    <td>{employee.OverTimeHours}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Pagination>{/* Pagination logic here */}</Pagination>
          </>
        )}
      </Container>
    </main>
  );
}

export default EmployeeTable;
