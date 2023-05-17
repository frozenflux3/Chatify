import React, { useState } from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	TextField,
	Box,
	makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const useStyles = makeStyles((theme) => ({
	flexBox: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		"& .MuiDialogTitle-root": {
			marginLeft: theme.spacing(2),
			marginRight: theme.spacing(2),
		},
		"& .MuiSwitch-root": {
			marginLeft: "auto",
			marginRight: theme.spacing(2),
		},
	},
}));

function CheckAuth({ checkPassword, changeAuthState }) {
	const [open, setOpen] = useState(true);
	const [password, setPassword] = useState("");
	const classes = useStyles();
	const history = useHistory();

	const handleClose = () => {
		setOpen(false);
		history.push(`/`);
	};
	const handleAuth = (e) => {
		e.preventDefault();
		if (password) {
			if (checkPassword(password)) {
				changeAuthState(false);
			} else {
				setPassword("");
			}
		} else {
			setPassword("");
		}
	};

	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<Box className={classes.flexBox}>
					<DialogTitle id="alert-dialog-title">
						{`Enter Channel Password`}
					</DialogTitle>
				</Box>
				<DialogContent>
					<form autoComplete="off" onSubmit={handleAuth}>
						<TextField
							id="outlined-password"
							label="Enter Channel Password"
							fullWidth
							margin="normal"
							variant="outlined"
							required
							value={password}
							type="password"
							style={{
								backgroundColor: "rgb(45 45 73)",
								borderRadius: "5px",
							}}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</form>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={handleClose}
						color="primary"
						style={{ color: "white" }}
					>
						Cancel
					</Button>
					<Button
						onClick={(e) => {
							handleAuth(e);
						}}
						type="submit"
						color="primary"
						autoFocus
						variant="contained"
					>
						Authenticate
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default CheckAuth;
