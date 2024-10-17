import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/Firebase';
import Navbar from '../components/Navbar';
import { Tabs, Tab, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import emailjs from 'emailjs-com';

const Gestion = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    email: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    post: '',
    socialId: '',
  });
  const [editEmployeeId, setEditEmployeeId] = useState(null);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  const employeeCollectionRef = collection(db, 'employees');

  useEffect(() => {
    const getEmployees = async () => {
      const data = await getDocs(employeeCollectionRef);
      setEmployees(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEmployees();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleConfirmClose = () => {
    setOpen(false);
    setConfirmAction(null);
  };

  const handleConfirmOpen = (action) => {
    setOpen(true);
    setConfirmAction(() => () => action());
  };

  const createEmployee = async () => {
    if (newEmployee.email && newEmployee.firstName && newEmployee.lastName && newEmployee.contactNumber && newEmployee.post && newEmployee.socialId) {
      await addDoc(employeeCollectionRef, newEmployee);
      setNewEmployee({
        email: '',
        firstName: '',
        lastName: '',
        contactNumber: '',
        post: '',
        socialId: '',
      });
      const data = await getDocs(employeeCollectionRef);
      setEmployees(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
  };

  const updateEmployee = async (id, updatedEmployee) => {
    const employeeDoc = doc(db, 'employees', id);
    await updateDoc(employeeDoc, updatedEmployee);
    setEditEmployeeId(null);
    const data = await getDocs(employeeCollectionRef);
    setEmployees(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteEmployee = async (id) => {
    const employeeDoc = doc(db, 'employees', id);
    await deleteDoc(employeeDoc);
    const data = await getDocs(employeeCollectionRef);
    setEmployees(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleCreate = () => {
    handleConfirmOpen(createEmployee);
  };

  const handleDelete = (id) => {
    handleConfirmOpen(() => deleteEmployee(id));
  };
  const handleSendEmail = async () => {
    const selectedEmails = selectedEmployees.map((emp) => emp.email).join(', ');
  
    try {
      const response = await fetch('http://localhost:3001/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to_email: selectedEmails,
          subject: 'test',
          text: 'test',
        }),
      });
  
      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleCheckboxChange = (event, employee) => {
    if (event.target.checked) {
      setSelectedEmployees([...selectedEmployees, employee]);
    } else {
      setSelectedEmployees(selectedEmployees.filter((emp) => emp.id !== employee.id));
    }
  };

  const handleEditEmployee = (id) => {
    setEditEmployeeId(id); 
  };

  const handleSaveEmployee = async (id, updatedEmployee) => {
    await updateEmployee(id, updatedEmployee); 
  };

  return (
    <div>
      <Navbar />

      <div className="gestion" style={{ maxWidth: '1200px', margin: 'auto', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Gestion des Employés</h1>
        <Tabs value={value} onChange={handleChange} aria-label="onglets de gestion des employés">
          <Tab label="Voir les Employés" />
          <Tab label="Ajouter un Employé" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Paper style={{ marginTop: '20px' }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>Prénom</TableCell>
                    <TableCell>Nom</TableCell>
                    <TableCell>Numéro de Contact</TableCell>
                    <TableCell>Poste</TableCell>
                    <TableCell>Numéro d'Identification</TableCell>
                    <TableCell>Actions</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSendEmail}
                        disabled={selectedEmployees.length === 0}
                      >
                        Envoyer Email
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {employees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell>
                        {editEmployeeId === employee.id ? (
                          <TextField
                            value={employee.email}
                            onChange={(e) => handleSaveEmployee(employee.id, { ...employee, email: e.target.value })}
                          />
                        ) : (
                          employee.email
                        )}
                      </TableCell>
                      <TableCell>
                        {editEmployeeId === employee.id ? (
                          <TextField
                            value={employee.firstName}
                            onChange={(e) => handleSaveEmployee(employee.id, { ...employee, firstName: e.target.value })}
                          />
                        ) : (
                          employee.firstName
                        )}
                      </TableCell>
                      <TableCell>
                        {editEmployeeId === employee.id ? (
                          <TextField
                            value={employee.lastName}
                            onChange={(e) => handleSaveEmployee(employee.id, { ...employee, lastName: e.target.value })}
                          />
                        ) : (
                          employee.lastName
                        )}
                      </TableCell>
                      <TableCell>
                        {editEmployeeId === employee.id ? (
                          <TextField
                            value={employee.contactNumber}
                            onChange={(e) => handleSaveEmployee(employee.id, { ...employee, contactNumber: e.target.value })}
                          />
                        ) : (
                          employee.contactNumber
                        )}
                      </TableCell>
                      <TableCell>
                        {editEmployeeId === employee.id ? (
                          <TextField
                            value={employee.post}
                            onChange={(e) => handleSaveEmployee(employee.id, { ...employee, post: e.target.value })}
                          />
                        ) : (
                          employee.post
                        )}
                      </TableCell>
                      <TableCell>
                        {editEmployeeId === employee.id ? (
                          <TextField
                            value={employee.socialId}
                            onChange={(e) => handleSaveEmployee(employee.id, { ...employee, socialId: e.target.value })}
                          />
                        ) : (
                          employee.socialId
                        )}
                      </TableCell>
                      <TableCell>
                        {editEmployeeId === employee.id ? (
                          <Button variant="contained" color="primary" onClick={() => setEditEmployeeId(null)}>
                            Sauvegarder
                          </Button>
                        ) : (
                          <Button variant="contained" color="primary" onClick={() => handleEditEmployee(employee.id)}>
                            Modifier
                          </Button>
                        )}
                        <Button variant="contained" color="secondary" onClick={() => handleDelete(employee.id)}>
                          Supprimer
                        </Button>
                      </TableCell>
                      <TableCell>
                        <input type="checkbox" onChange={(e) => handleCheckboxChange(e, employee)} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Paper style={{ marginTop: '20px', padding: '20px' }}>
            <TextField
              label="Email"
              value={newEmployee.email}
              onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
              style={{ marginRight: '10px', marginBottom: '10px', width: '100%' }}
            />
            <TextField
              label="Prénom"
              value={newEmployee.firstName}
              onChange={(e) => setNewEmployee({ ...newEmployee, firstName: e.target.value })}
              style={{ marginRight: '10px', marginBottom: '10px', width: '100%' }}
            />
            <TextField
              label="Nom"
              value={newEmployee.lastName}
              onChange={(e) => setNewEmployee({ ...newEmployee, lastName: e.target.value })}
              style={{ marginRight: '10px', marginBottom: '10px', width: '100%' }}
            />
            <TextField
              label="Numéro de Contact"
              value={newEmployee.contactNumber}
              onChange={(e) => setNewEmployee({ ...newEmployee, contactNumber: e.target.value })}
              style={{ marginRight: '10px', marginBottom: '10px', width: '100%' }}
            />
            <TextField
              label="Poste"
              value={newEmployee.post}
              onChange={(e) => setNewEmployee({ ...newEmployee, post: e.target.value })}
              style={{ marginRight: '10px', marginBottom: '10px', width: '100%' }}
            />
            <TextField
              label="Numéro d'Identification"
              value={newEmployee.socialId}
              onChange={(e) => setNewEmployee({ ...newEmployee, socialId: e.target.value })}
              style={{ marginRight: '10px', marginBottom: '10px', width: '100%' }}
            />
            <Button variant="contained" color="primary" onClick={handleCreate} style={{ marginTop: '10px' }}>
              Ajouter Employé
            </Button>
          </Paper>
        </TabPanel>
        <Dialog open={open} onClose={handleConfirmClose}>
          <DialogTitle>Confirmation de l'Action</DialogTitle>
          <DialogContent>
            <DialogContentText>Êtes-vous sûr de vouloir continuer avec cette action?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleConfirmClose} color="primary">
              Annuler
            </Button>
            <Button onClick={() => { confirmAction(); handleConfirmClose(); }} color="secondary">
              Confirmer
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

export default Gestion;
