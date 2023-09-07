import { useState } from "react";

import "./App.css";
import { Table } from "./Components/Table";
import { Modal } from "./Components/Modal";
import { MeterTable } from "./Components/MeterTable";
import { MeterModal } from "./Components/MeterModal";
import { CurrentVoltTable } from "./Components/CurrentVoltTable";
import { CurrentVoltModal } from "./Components/CurrentVoltModal";
import {Grid, TextField, Card, CardContent,Select,InputLabel,MenuItem,FormControl} from "@mui/material"
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  const [rows, setRows] = useState([
    {
      eqname: "Fan",
      quantity: "6",
      capacity: "5",
      munit:"KWH",
      totLoad:".53",
      loadKW:".23",
    }
  ]);
  const [rows1, setRows1] = useState([
    {
      zonename: "Zone1",
      kWh: "98890",
      MD_kW: "0",
      kVAH:"142602",
      kVA_MD:"45.7",
      RkVAH:"54512",
    }
  ]);
  const [rows2, setRows2] = useState([
    {
      CVmeasure: "Current measured at incoming supply",
        rPhase: "58 Amp",
        yPhase: "54 Amp",
        bPhase:"65 Amp"
    }
  ]);


  const [rowToEdit, setRowToEdit] = useState(null);
  const [rowToEdit1, setRowToEdit1] = useState(null);
  const [rowToEdit2, setRowToEdit2] = useState(null);


  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };
  const handleDeleteRow1 = (targetIndex) => {
    setRows1(rows1.filter((_, idx) => idx !== targetIndex));
  };
  const handleDeleteRow2 = (targetIndex) => {
    setRows2(rows2.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };
  const handleEditRow1 = (idx) => {
    setRowToEdit1(idx);

    setModalOpen1(true);
  };
  const handleEditRow2 = (idx) => {
    setRowToEdit2(idx);

    setModalOpen2(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };


  const handleSubmit1 = (newRow) => {
    rowToEdit1 === null
      ? setRows1([...rows1, newRow])
      : setRows1(
          rows1.map((currRow, idx) => {
            if (idx !== rowToEdit1) return currRow;

            return newRow;
          })
        );
  };

  const handleSubmit2 = (newRow) => {
    rowToEdit2 === null
      ? setRows2([...rows2, newRow])
      : setRows2(
          rows2.map((currRow, idx) => {
            if (idx !== rowToEdit2) return currRow;

            return newRow;
          })
        );
  };


  // Select Values
  const [meterin, setMeterIn] = useState('');

  const handleChangeYN = (event) => {
    setMeterIn(event.target.value);
  };

  const [externalct, setExternalct] = useState('');

  const handleChangeYN1 = (event) => {
    setExternalct(event.target.value);
  };
  return (
    <div className="App">
    <div className="App1">
      <div className="child">
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button onClick={() => setModalOpen(true)} className="btn">
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
  </div>
  <div className="child">
      <MeterTable rows={rows1} deleteRow={handleDeleteRow1} editRow={handleEditRow1}/>
      <button onClick={() => setModalOpen1(true)} className="btn">
        Add
      </button>
      {modalOpen1 &&<MeterModal 
      closeModal1={() => {
        setModalOpen1(false);
        setRowToEdit1(null);
      }}
      onSubmit={handleSubmit1}
      defaultValue={rowToEdit1 !== null && rows1[rowToEdit1]}/>}
    </div>

    <div className="child">
      <CurrentVoltTable rows={rows2} deleteRow={handleDeleteRow2} editRow={handleEditRow2}/>
      <button onClick={() => setModalOpen2(true)} className="btn">
        Add
      </button>
      {modalOpen2 &&<CurrentVoltModal
      closeModal2={() => {
        setModalOpen2(false);
        setRowToEdit2(null);
      }}
      onSubmit={handleSubmit2}
      defaultValue={rowToEdit2 !== null && rows2[rowToEdit2]}
      />}

    </div>
    </div>
    <Card>
      <CardContent>
        <Grid container spacing={1}>
        <Grid xs={12} sm={6} item>
        <FormControl fullWidth>
          <InputLabel id="meter-installed-select-label">Whether meter installed in meter box or not</InputLabel>
          <Select labelId="meter-installed-select-label" 
          label="Whether meter installed in meter box or not"
          id="meter-installed"
          value={meterin}
          onChange={handleChangeYN}>
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
          </Select>
        </FormControl>
        </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Meter Serial No. As per Bill" placeholder="Enter Meter Serial No. As per Bill" variant="outlined" fullWidth/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Actual Meter Serial No. at Site" placeholder="Enter Actual Meter Serial No. at Site" variant="outlined" fullWidth/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Meter Make" placeholder="Enter Meter Make" variant="outlined" fullWidth/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Meter Capacity in Amp" placeholder="Enter Meter Capacity in Amp" variant="outlined" fullWidth/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Lab No." placeholder="Enter Lab No." variant="outlined" fullWidth/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Type" placeholder="Enter Type" variant="outlined" fullWidth/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Rev, Imp/Wh" placeholder="Enter Rev, Imp/Wh" variant="outlined" fullWidth/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <FormControl fullWidth>
          <InputLabel id="external-ct-select-label">Whether external CT connected?</InputLabel>
          <Select labelId="external-ct-select-label" 
          label="Whether external CT connected?"
          id="external-ct"
          value={externalct}
          onChange={handleChangeYN1}>
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
          </Select>
        </FormControl>
          </Grid>

          <Grid xs={12} sm={6} item>
          <TextField label="meter CT ratio" placeholder="Enter Meter Serial No. As per Bill" variant="outlined" fullWidth/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="meter PT ratio" placeholder="Enter Actual Meter Serial No. at Site" variant="outlined" fullWidth/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="MF as per bill" placeholder="Enter Meter Make" variant="outlined" fullWidth/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Over all MF for units" placeholder="Enter  Over all MF for units" variant="outlined" fullWidth/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Power Factor on meter display" placeholder="Enter Power Factor on meter display" variant="outlined" fullWidth/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Scale Facto" placeholder="Enter  Scale Factor" variant="outlined" fullWidth/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Meter Status" placeholder="Enter Meter Status" variant="outlined" fullWidth/>
          </Grid>
          
        </Grid>
      </CardContent>
    </Card>
    </div>
    
  );
}

export default App;
