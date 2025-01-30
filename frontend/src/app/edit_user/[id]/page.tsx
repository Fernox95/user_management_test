"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { TextField, MenuItem, Button, Box } from "@mui/material";
import { getUser, putUser } from "@/utils/api";
import { UserUpdate } from "@/utils/types";


const EditUser = () => {
  const router = useRouter();
  const { id } = useParams();
  const [formData, setFormData] = useState<UserUpdate | null>(null);
  const user_id = parseInt(id)  

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (user_id) {          
          const response = await getUser(user_id);
          setFormData(response);
        }
      } catch (error) {
        console.error('Error al obtener el usuario.', error);
      }
    };
    if (user_id) fetchUser();
  }, [user_id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formData) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (user_id && formData) {
        putUser(user_id, formData);
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!formData) return <p>Cargando usuario...</p>;

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2, width: 300, margin: "auto" }}>
      <TextField label="First Name" name="first_name" value={formData.first_name} onChange={handleChange} required />
      <TextField label="Last Name" name="last_name" value={formData.last_name} onChange={handleChange} required />
      <TextField label="Middle Name" name="midle_name" value={formData.midle_name || ""} onChange={handleChange} />
      <TextField label="Email" name="email" value={formData.email} onChange={handleChange} required type="email" />
      <TextField label="Phone Number" name="phone_number" value={formData.phone_number} onChange={handleChange} required type="tel" />
      <TextField label="Address" name="addres" value={formData.addres} onChange={handleChange} required />
      <TextField select label="Role" name="role" value={formData.role} onChange={handleChange} required>
        <MenuItem value="Admin">Admin</MenuItem>
        <MenuItem value="User">User</MenuItem>
      </TextField>
      <Button type="submit" variant="contained">Update User</Button>
    </Box>
  );
};

export default EditUser;
