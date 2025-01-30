"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { deleteUser, getUsersList } from "@/utils/api";
import { 
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle, 
  IconButton,
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead,
  TableRow, 
  TablePagination,
  TableFooter,
  Typography 
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TablePaginationActions } from '../utils/TablePaginationActions';
import { UserInfo } from '@/utils/types';

import { useStyles } from './Styles';


export default function Home() {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const handleDeleteClick = (user_id: number) => {
    setSelectedUser(user_id);
    setOpenDialog(true);
  };

  const handleDeleteConfirm = () => {
    handleDelete(selectedUser)
  };

  const router = useRouter();

  // Paginación
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsersList();
        setUsers(response);
        console.log(response)
      } catch (error) {
        console.error('Error al obtener los usuarios.', error);
      }
    };
    fetchUsers();
  }, [page, rowsPerPage, refresh]);

  const handleClickEdit = (user_id: number) => {
    router.push(`/edit_user/${user_id}`);
  };

  const handleDelete = (user_id: number) => {
    try {
      deleteUser(user_id);
      setRefresh(prev => !prev);
    } catch (error) {
      console.error('Error al eliminar usuario.', error);
    } 
  };


  return (
    <Container maxWidth={false} sx={{ ...useStyles.containerFull }}>
      <Box sx={{ ...useStyles.boxContainer }}>
        <Box sx={{ ...useStyles.boxContainer.boxContent }}>
          <Box sx={{ ...useStyles.boxContainer.boxContent.boxTextSection }}>
            <Typography>Users</Typography> 
          </Box>
          <Box sx={{ ...useStyles.boxContainer.boxContent.boxTextSection }}>         
            <Button variant="outlined">
              <Link href="/new_user">New User</Link>
            </Button>
          </Box>
            <Box sx={{ ...useStyles.boxContainer.boxContent.boxTable }}>             
              <TableContainer>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="colName">
                        <Typography>Name</Typography>
                      </TableCell>
                      <TableCell className="colEmail">
                        <Typography>Email</Typography>
                      </TableCell>
                      <TableCell className="colPhone">
                        <Typography>Phone Number</Typography>
                      </TableCell>
                      <TableCell className="colRole">
                        <Typography>Role</Typography>
                      </TableCell>
                      <TableCell className="colStatus">
                        <Typography>Status</Typography>
                      </TableCell>
                      <TableCell className="colActions">
                        <Typography>Actions</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      : users
                    ).map((user) => {
                      return (
                        <TableRow key={`usuario-${user.id}`}>
                          <TableCell className="colName">
                            <Typography>{`${user.first_name} ${user.last_name} ${user.midle_name}`}</Typography>
                          </TableCell>
                          <TableCell className="colEmail">
                          <Typography>{`${user.email}`}</Typography>
                          </TableCell>
                          <TableCell className="colPhone">
                            <Typography>{`${user.phone_number}`}</Typography>
                          </TableCell>
                          <TableCell className="colRole">
                            <Typography>{`${user.role}`}</Typography>
                          </TableCell>
                          <TableCell className="colStatus">
                            { user.status ? (
                              <Typography>Activo</Typography>
                            ):(
                              <Typography>Inactivo</Typography>
                            )}
                          </TableCell>
                          <TableCell className="colActions">
                            <IconButton size="large"  onClick={() => handleClickEdit(user.id)} color="inherit">
                              <EditIcon />
                            </IconButton>                            
                            <IconButton size="large" onClick={() => handleDeleteClick(user.id)} color="inherit">
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>                        
                        </TableRow>
                      );
                    })}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                        colSpan={4}
                        count={users.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        labelRowsPerPage="Filas por página:"
                        labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
            </Box>
        </Box>
      </Box>
      <ConfirmDeleteDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onConfirm={handleDeleteConfirm}
      />
    </Container>
  );
}

const ConfirmDeleteDialog = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>User delete</DialogTitle>
      <DialogContent>
        Are you sure on deleteting that user?.
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            onConfirm();
            onClose();
          }}
          color="secondary"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
