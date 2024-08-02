import React from "react";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import { userSchema, UserSchema } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid, TextField } from "@mui/material";

const MyForm: React.FC = () => {
    const {
        register, handleSubmit, formState: { errors },
    } = useForm<UserSchema>({
        resolver: zodResolver(userSchema),
    });

    const onSubmit = (data: UserSchema) => {
        console.log(data);
    }

    return (
        <Box>
            <Paper elevation={6} sx={{ padding: 2 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <TextField
                                id="name"
                                label="Name"
                                variant="outlined"
                                size="small"
                                fullWidth
                                {...register("name")}
                                error={!!errors.name}
                                helperText={errors.name ? errors.name.message : ""}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                id="age"
                                type="number"
                                label="Age"
                                variant="outlined"
                                size="small"
                                fullWidth
                                {...register("age", { valueAsNumber: true })}
                                error={!!errors.age}
                                helperText={errors.age ? errors.age.message : ""}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                size="small"
                                fullWidth
                                {...register("email")}
                                error={!!errors.email}
                                helperText={errors.email ? errors.email.message : ""}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                id="password"
                                label="Password"
                                variant="outlined"
                                size="small"
                                fullWidth
                                {...register("password")}
                                error={!!errors.password}
                                helperText={errors.password ? errors.password.message : ""}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={3} sx={{ paddingTop: 2 }}>
                            <Button variant="contained" type='submit'>Save</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Box>
    );
}

export default MyForm;