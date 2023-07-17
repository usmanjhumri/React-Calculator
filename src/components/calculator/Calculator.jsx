import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import "./Calculator.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const Calculator = () => {
  const [val, setVal] = useState("");
  const [total, setTotal] = useState([]);
  const [table, setTable] = useState([]);
  console.log(table, " table show huwa");
  console.log(total, " js");
  let totalValue = total[total.length - 1];
  console.log(totalValue);
  const remove = () => {
    try {
      setVal(val.slice(0, -1));
    } catch (error) {
      setVal("");
    }
  };
  const clear = () => {
    setVal("");
    // setTotal([])
  };
  const calculate = () => {
    try {
      if (total.length < 1) {
        const totalmila = parseFloat(eval(val));
        console.log(val);
        setTable([...table, { first, operator, last, totalmila }]);
        setTotal([...total, totalmila]);
        setVal(totalmila.toString());
      } else {
        const [first, operator, last] = val.split(/([+-/*%])/);
        const valtoCalc = val + operator + totalValue;
        const totalmila = parseFloat(eval(valtoCalc));
        console.log(val, totalValue);
        setTable([...table,  { first, operator, last, totalmila }]);
        setTotal([...total, val, totalmila]);
        setVal(totalmila.toString());
      }
    } catch (error) {
      setVal("enter sai number");
    }
  };

  return (
    <>
      <Box
        sx={{
          margin: "auto",
        }}
      >
        <Container>
          <Typography
            sx={{
              textAlign: "center",
              margin: "1rem 0px",
              fontSize: "3rem",
              color: "#ff9500",
              textTransform: "capitalize",
            }}
          >
            Calculator in react jS
          </Typography>
          <Grid container>
            <Box className="calculator">
              <Box className="display">
                <TextField
                  type="text"
                  className="input"
                  id="result"
                  value={val}
                  onChange={(e) => setVal(e.target.value)}
                />
              </Box>
              <Box className="keys">
                <Button
                  className="active operator"
                  value="C"
                  onClick={() => clear()}
                >
                  C
                </Button>
                <Button
                  className="active operator"
                  value="DEL"
                  onClick={() => remove()}
                >
                  DEL
                </Button>
                <Button
                  className="active operator"
                  value="/"
                  onClick={(e) => setVal(val + e.target.value)}
                >
                  ÷
                </Button>
                <Button
                  className="active operator"
                  value="-"
                  onClick={(e) => setVal(val + e.target.value)}
                >
                  -
                </Button>

                <Button
                  className="active number"
                  value="7"
                  onClick={(e) => setVal(val + e.target.value)}
                >
                  7
                </Button>
                <Button
                  className="active number"
                  value="8"
                  onClick={(e) => setVal(val + e.target.value)}
                >
                  8
                </Button>
                <Button
                  className="active number"
                  value="9"
                  onClick={(e) => setVal(val + e.target.value)}
                >
                  9
                </Button>
                <Button
                  className="active operator"
                  value="*"
                  onClick={(e) => setVal(val + e.target.value)}
                >
                  x
                </Button>
                <Button
                  className="active number"
                  value="4"
                  onClick={(e) => setVal(val + e.target.value)}
                >
                  4
                </Button>
                <Button
                  className="active number"
                  value="5"
                  onClick={(e) => setVal(val + e.target.value)}
                >
                  5
                </Button>

                <Button
                  className="active number"
                  value="6"
                  onClick={(e) => setVal(val + e.target.value)}
                >
                  6
                </Button>

                <Button
                  className="active operator"
                  value="+"
                  onClick={(e) => setVal(val + e.target.value)}
                >
                  +
                </Button>
                <Button
                  className="active number"
                  value="1"
                  onClick={(e) => setVal(val + e.target.value)}
                >
                  1
                </Button>
                <Button
                  className="active number"
                  value="2"
                  onClick={(e) => setVal(val + e.target.value)}
                >
                  2
                </Button>
                <Button
                  className="active number"
                  value="3"
                  onClick={(e) => setVal(val + e.target.value)}
                >
                  3
                </Button>
                <Button
                  className="active number zero"
                  value="0"
                  onClick={(e) => setVal(val + e.target.value)}
                >
                  0
                </Button>
                <Button
                  className="active number"
                  value="."
                  onClick={(e) => setVal(val + e.target.value)}
                >
                  .
                </Button>
                <Button className="active operator" onClick={() => calculate()}>
                  =
                </Button>
              </Box>
              <TableContainer component={Paper} sx={{ marginTop: "1rem" }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="right">
                        First Value
                      </StyledTableCell>
                      <StyledTableCell align="right">Operator</StyledTableCell>
                      <StyledTableCell align="right">
                        Second Value
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Total Amount
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {table.map((item) => (
                      <StyledTableRow>
                        <StyledTableCell align="right">
                          {item.first}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {item.operator}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {item.last}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {item.totalmila}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Calculator;
