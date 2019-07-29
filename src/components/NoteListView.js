import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItem,
  ListItemText,
  List,
  Container,
  Typography,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  header: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(6)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const NoteList = ({ notes }) => {
  // TODO: handle text overflow better
  const truncateContent = content => {
    if (content.indexOf('\n') === -1) {
      return content;
    }
    return content.substring(0, content.indexOf('\n'));
  }

  const getItems = () =>
    notes.map((note, index) => (
      <ListItem button key={index} divider>
        <ListItemText primary={note.title} secondary={truncateContent(note.content)} />
      </ListItem>
    ));

  if (notes.length > 0) {
    return <List component="nav">{getItems()}</List>;
  }
  return (
    <Container>
      <Typography variant="caption">No notes added</Typography>
    </Container>
  );
};

// TODO: move new note form to its own component
const NoteListView = ({ name, notes }) => {
  const classes = useStyles();
  // const [input, setInput] = useState("");

  // const onSubmit = event => {
  //   event.preventDefault();
  //   const newNote = new Note(input, input);
  //   addNote(newNote);
  //   setInput("");
  // };

  return (
    <Box minHeight="100vh">
      {/* <Container maxWidth="sm">
        <form onSubmit={onSubmit}>
          <TextField
            id="standard-dense"
            label="Add note"
            margin="normal"
            value={input}
            className={classes.textField}
            onChange={event => setInput(event.target.value)}
          />
          <Button onClick={onSubmit}>Submit</Button>
        </form>
      </Container> */}
      <Container>
        <Typography className={classes.header} variant="h6">
          {name}
        </Typography>
        <Typography variant="caption">{notes.length} notes</Typography>
      </Container>
      <NoteList notes={notes} />
    </Box>
  );
};

export default NoteListView;