import './App.css';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import { useState } from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import { Container, Grid } from '@mui/material';

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contacts, setContacts] = useState(contactsJSON);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  }

  return (
    <div className="App">
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={6}>
            <ContactForm addContact={addContact} />
          </Grid>
          <Grid item xs={6}>
            <Contact data={contacts} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
