"use client";

import { useState } from "react";
import { TextField, MenuItem, Button, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { postUser } from "@/utils/api";
import { UserInfo } from '@/utils/types';


const UserForm = () => {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    midle_name: "",
    email: "",
    phone_number: "",
    role: "User",
    addres: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar email y teléfono
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(formData.email)) {
      alert("Email inválido");
      return;
    }
    if (!phoneRegex.test(formData.phone_number)) {
      alert("Teléfono inválido");
      return;
    }

    const id = Math.floor(Math.random() * (500 - 50 + 1)) + 50;

    const newUser: UserInfo = {
      id: id,
      first_name: formData.first_name,
      last_name: formData.last_name,
      midle_name: formData.midle_name || null,
      email: formData.email,
      phone_number: formData.phone_number,
      role: formData.role,
      addres: formData.addres,
      status: true,
    };

    try {
      postUser(newUser);
      router.push("/");
    } catch (error) {
      console.error('Error al crear usuario.', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2, width: 600, margin: "auto" }}>
      <TextField label="First Name" name="first_name" value={formData.first_name} onChange={handleChange} required />
      <TextField label="Last Name" name="last_name" value={formData.last_name} onChange={handleChange} required />
      <TextField label="Midle Name" name="midle_name" value={formData.midle_name} onChange={handleChange} />
      <TextField label="Email" name="email" value={formData.email} onChange={handleChange} required type="email" />
      <TextField label="Phone Number" name="phone_number" value={formData.phone_number} onChange={handleChange} required type="tel" />
      <TextField select label="Role" name="role" value={formData.role} onChange={handleChange} required>
        <MenuItem value="Admin">Admin</MenuItem>
        <MenuItem value="User">User</MenuItem>
      </TextField>      
      <TextField label="Addres" name="addres" value={formData.addres} onChange={handleChange} required/>
      <Button type="submit" variant="contained">Create User</Button>
    </Box>
  );
};

export default UserForm;
