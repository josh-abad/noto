import React, { useState } from "react";
import AddCircle from "@material-ui/icons/AddCircleOutline";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Notebook from "../models/Notebook";
import { ListItem, ListItemIcon, ListItemText, DialogContentText } from "@material-ui/core";

const NewNotebookDialog = ({ user, className, addNotebook }) => {
  const [open, setOpen] = useState(false);
  const [nameInput, setNameInput] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    const newNotebook = new Notebook(user, nameInput);
    addNotebook(newNotebook);
    setNameInput("");
    setOpen(false);
  };

  return (
    <div>
      <ListItem button className={className} onClick={() => setOpen(true)}>
        <ListItemIcon>
          <AddCircle />
        </ListItemIcon>
        <ListItemText primary="New Notebook" />
      </ListItem>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
        onSubmit={onSubmit}
      >
        <DialogTitle id="form-dialog-title">Create new notebook</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Notebooks are useful for grouping notes around a common topic.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={nameInput}
            onChange={event => setNameInput(event.target.value)}
            label="Name"
            variant="outlined"
            name="name"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={onSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NewNotebookDialog;
