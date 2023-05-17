import React, { useState } from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	Switch,
	TextField,
	Box,
	makeStyles,
} from "@material-ui/core";

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

function CreateRoom({ create, manage }) {
	const [open, setOpen] = useState(true);
	const [roomName, setRoomName] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [isPrivate, setIsPrivate] = useState(false);
	const classes = useStyles();

	const handleClose = () => {
		setOpen(false);
		manage();
	};
	const handleNewRoom = (e) => {
		e.preventDefault();
		if (roomName) {
			if (isPrivate) {
				if (
					password &&
					passwordConfirm &&
					password === passwordConfirm
				) {
					create(roomName, isPrivate, password);
					manage();
				} else {
					setPassword("");
					setPasswordConfirm("");
				}
			} else {
				create(roomName);
				manage();
			}
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
						{`Create A New ${
							isPrivate ? "Private" : "Public"
						} Channel`}
					</DialogTitle>
					<Switch
						checked={isPrivate}
						onChange={() => setIsPrivate(!isPrivate)}
						color="primary"
					/>
				</Box>
				<DialogContent>
					<form autoComplete="off" onSubmit={handleNewRoom}>
						<TextField
							id="outlined-basic"
							label="Enter Channel Name"
							fullWidth
							margin="normal"
							variant="outlined"
							required
							value={roomName}
							style={{
								backgroundColor: "rgb(45 45 73)",
								borderRadius: "5px",
							}}
							onChange={(e) => {
								setRoomName(e.target.value);
							}}
						/>
						{isPrivate ? (
							<>
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
								<TextField
									id="outlined-confirm"
									label="Confirm Password"
									fullWidth
									margin="normal"
									variant="outlined"
									required
									value={passwordConfirm}
									type="password"
									style={{
										backgroundColor: "rgb(45 45 73)",
										borderRadius: "5px",
									}}
									onChange={(e) => {
										setPasswordConfirm(e.target.value);
									}}
								/>
							</>
						) : null}
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
							handleNewRoom(e);
						}}
						type="submit"
						color="primary"
						autoFocus
						variant="contained"
					>
						Create
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default CreateRoom;
