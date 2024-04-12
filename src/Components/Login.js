import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import Heading from "../shared/Heading";
import Input from "./Input";
import SimplifiedButton from "./SimplifiedButton";
import { login } from "../helpers/server";
import { useAuth } from "../providers/AuthProvider";

function Login({ changeModal }) {
	const auth = useAuth();
	const [formValid, setFormValid] = useState({
		email: false,
		password: false,
	});
	const [buttonClicked, setButtonClicked] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [responseMessage, setResponseMessage] = useState("");

	const validateEmail = (email) => {
		return /\S+@\S+\.\S+/.test(email);
	}
	const validatePassword = (password) => {
		return password.length > 0;
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));

		switch (name) {
			case 'email':
				setFormValid((prevFormValid) => ({ ...prevFormValid, email: validateEmail(value) }));
				break;
			case 'password':
				setFormValid((prevFormValid) => ({ ...prevFormValid, password: validatePassword(value) }));
				break;
			default:
			// Handle default case if needed
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setButtonClicked(true);

		console.log("submit" + e.target)

		try {
			console.log(formValid);
			if (!formValid.email || !formValid.password) {
				return;
			}

			await login(formData).then(auth.loggedIn);
			setResponseMessage("உங்களுடைய தகவல் வெற்றிகரமாக அனுப்பப்பட்டுள்ளது")
			document.getElementsByClassName("response-message")[0].style.color = "green";
			setFormData({
				email: "",
				password: "",
			});
			setButtonClicked(false);
		} catch (error) {
			setResponseMessage("உங்களுடைய தகவல் அனுப்பப்படவில்லை")
			document.getElementsByClassName("response-message")[0].style.color = "red";
		}
	};

	return (
		<Container maxWidth="lg">
			<Heading>உள்நுழை</Heading>

			<Grid>
				<Input
					onChange={handleInputChange}
					value={formData.email}
					name="email"
					label="மின்னஞ்சல்"
					icon="mail"
					showValidation={buttonClicked && !formData.email}
					validationMessage="மின்னஞ்சலை சரியாக உள்ளிடவும்"
				/>
				<Input
					onChange={handleInputChange}
					value={formData.password}
					name="password"
					label="கடவுச்சொல்"
					icon="password"
					showValidation={buttonClicked && !formData.password}
					validationMessage="கடவுச்சொல்லை சரியாக உள்ளிடவும்"
					type="password"
				/>
				<Grid
					container
					item
					justifyContent="flex-end"
					paddingBottom={2}
					paddingTop={2}
				>
					<button className="contact-send-button" onClick={handleSubmit} >
						அனுப்பு
					</button>
				</Grid>
				<Grid item>
					<div className="response-message">{responseMessage}</div>
				</Grid>
				<Grid container item justifyContent="center">
					<SimplifiedButton onClick={changeModal.bind(null, "signup")}>கணக்கை உருவாக்கு</SimplifiedButton>
				</Grid>
			</Grid>
		</Container>
	);
}
export default Login;
