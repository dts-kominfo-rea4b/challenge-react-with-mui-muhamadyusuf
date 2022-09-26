// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { Box, Button, Card, TextField } from '@mui/material';
import { useState } from 'react';

const ContactForm = ({addContact}) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  const [newContact, setNewContact] = useState({
    name: '',
    phone: '',
    email: '',
    photo: ''
  });

  return (
    <>
      <Card variant="outlined">
        <Box
          pt={1} pb={1}
          component="form"
          sx={{
            '& > :not(style)': { m: 0.7, width: '93%' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField required id="nama" label="Nama" variant="filled" value={newContact.name} onChange={(e) => setNewContact({...newContact, name: e.target.value})} />
          <TextField required id="phone" label="Phone" variant="filled" value={newContact.phone} onChange={(e) => setNewContact({...newContact, phone: e.target.value})} />
          <TextField required id="email" label="Email" variant="filled" value={newContact.email} onChange={(e) => setNewContact({...newContact, email: e.target.value})} />
          <TextField required id="photo" label="Photo URL" variant="filled" value={newContact.photo} onChange={(e) => setNewContact({...newContact, photo: e.target.value})} />
          <Button variant="contained" onClick={() => {addContact(newContact); setNewContact({name: '', phone: '', email: '', photo: ''})}}>ADD NEW</Button>
        </Box>
      </Card>
    </>
  );
}

export default ContactForm;