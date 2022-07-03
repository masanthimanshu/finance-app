import { Container, Typography, Button, TextField, Box, FormControl, FormLabel, FormHelperText, Input } from "@mui/material";
import { useState } from "react";
import { UpdateContext } from "../../context";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { updateAuth } = UpdateContext();

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h1">Login</Typography>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            label="Username"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <TextField
          label="Username"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => updateAuth()}
        >
          Login
        </Button>
      </Container>
    </>
  );
}
