import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

import { FormControlLabel } from "@material-ui/core";
import { makeStyles, ThemeProvider, createTheme } from "@material-ui/core/styles";

import "fontsource-roboto";

import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles({
	root: {
		background: "linear-gradient(45deg, #2a4d3f, #1b878f)",
		border: 0,
		marginTop: 10,
		marginBottom: 15,
		borderRadius: 15,
		color: "white",
		padding: "20px 30px",
	},
});

const theme = createTheme({
	typography: {
		h2: {
			fontSize: 40,
			marginTop: '40px'
		},
	},
});

const ButtonStyled = () => {
	const classes = useStyles();
	return <Button className={classes.root}>Test Styled Button</Button>;
};

const CheckboxExample = () => {
	const [checked, setChecked] = React.useState(true);
	return (
		<div>
			<FormControlLabel
				control={
					<Checkbox
						checked={checked}
						icon={<DeleteIcon />}
						checkedIcon={<SaveIcon />}
						onChange={(e) => setChecked(e.target.checked)}
						inputProps={{ "aria-label": "secondary checkbox" }}
					/>
				}
				label='Testing Checkbox'
			/>
		</div>
	);
};

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth='md'>
				<div className='App'>
					<header className='App-header'>
					<AppBar>
						<Toolbar>
							<IconButton>
								<MenuIcon />
							</IconButton>
							<Typography variant='h6'>
								MUI Theming
							</Typography>
							<Button>
								Home
							</Button>
							<Button>
								About
							</Button>
							<Button>
								Login
							</Button>
							<Button>
								Signup
							</Button>
						</Toolbar>
					</AppBar>
						<Typography variant='h2' component='div'>
							Welcome to MUI
						</Typography>
						<Typography variant='subtitle1'>
							Learn how to use Material UI
						</Typography>
						<Typography variant='body1'>
							Fast Development with MUI
						</Typography>

						<ButtonStyled />

						<Grid container spacing={2} justifyContent='center'>
							<Grid item xs={3} sm={5}>
								<Paper elevation={3} variant="outlined" style={{ height:75, width:'100' }} />
							</Grid>
							<Grid item xs={3} sm={5}>
								<Paper elevation={3}  variant="outlined" style={{ height:75, width:'100' }} />
							</Grid>
							<Grid item xs={3} sm={5}>
								<Paper elevation={3}  variant="outlined" style={{ height:75, width:'100' }} />
							</Grid>
						</Grid>

						<CheckboxExample />

						<ButtonGroup variant='contained' color='primary'>
							<Button startIcon={<SaveIcon />} size='large'>
								Save
							</Button>
							<Button startIcon={<DeleteIcon />} size='large'>
								Discard
							</Button>
						</ButtonGroup>
						<img src={logo} className='App-logo' alt='logo' />
					</header>
				</div>
			</Container>
		</ThemeProvider>
	);
};

export default App;
