import React, { useMemo, useState } from "react";
import { Container, Grid } from "@mui/material";
// import "./contact.css";
import Heading from "../shared/Heading";
import Input from "./Input";
import SimplifiedButton from "./SimplifiedButton";
import { signup } from "../helpers/server";
import { useAuth } from "../providers/AuthProvider";

import "./signup.css";

const validateEmail = (email) => {
	return /\S+@\S+\.\S+/.test(email);
}
const validateNotEmpty = (str) => {
	return str.length > 0;
}
const validatePhoneNo = (phoneNo) => {
	if (typeof phoneNo != "string" || phoneNo.length < 10) return false;
	// TODO additional valdiation?
	return true;
}

function Signup({ changeModal }) {
	const auth = useAuth();
	const [formValid, setFormValid] = useState({
		name: false,
		email: false,
		password: false,
		confirmPassword: false,
		phoneNo: false,
		profileImage: false
	});
	const [buttonClicked, setButtonClicked] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		phoneNo: "",
		profileImage: undefined
	});

	const [responseMessage, setResponseMessage] = useState("");

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));

		switch (name) {
			case 'email':
				setFormValid((prevFormValid) => ({ ...prevFormValid, email: validateEmail(value) }));
				break;
			case 'name':
			case 'password':
				setFormValid((prevFormValid) => ({ ...prevFormValid, [name]: validateNotEmpty(value) }));
				break;
			case 'confirmPassword':
				setFormValid((prevFormValid) => ({ ...prevFormValid, [name]: value === formData.password }));
				break;
			case 'phoneNo':
				setFormValid((prevFormValid) => ({ ...prevFormValid, phoneNo: validatePhoneNo(value) }));
				break;
			default:
			// Handle default case if needed
		}
	};

	const imageUrl = useMemo(() => {
		const profileImage = formData.profileImage;
		if (!profileImage) return undefined;
		return URL.createObjectURL(profileImage);
	}, [formData.profileImage]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setButtonClicked(true);

		try {
			const anythingInvalid = Object.values(formValid).findIndex((v) => !v) != -1;
			if (anythingInvalid) {
				return;
			}

			const { confirmPassword, ...createUserData } = formData;
			await signup(createUserData).then(auth.loggedIn);

			setResponseMessage("உங்களுடைய தகவல் வெற்றிகரமாக அனுப்பப்பட்டுள்ளது")
			document.getElementsByClassName("response-message")[0].style.color = "green";
			URL.revokeObjectURL(imageUrl);
			setFormData({
				name: "",
				email: "",
				password: "",
				confirmPassword: "",
				phoneNo: "",
				profileImage: undefined
			});
			setButtonClicked(false);
		} catch (error) {
			setResponseMessage("உங்களுடைய தகவல் அனுப்பப்படவில்லை")
			document.getElementsByClassName("response-message")[0].style.color = "red";
		}
	};

	return (
		<Container maxWidth="lg">
			<Heading>கணக்கை உருவாக்கு</Heading>

			<Grid className="sign-up--form-content" >
				<label className="sign-up--image-preview" >
					<input type="file" accept="image/*" onChange={(event) => {
						const files = event.target.files;
						if (files.length == 0) return;

						URL.revokeObjectURL(imageUrl);
						const file = files[0];
						setFormData((prev) => {
							return {
								...prev, profileImage: file
							}
						})
					}} />
					<div>
						{
							formData.profileImage == undefined ?
								<span className="icon material-symbols-outlined">
									add_a_photo
								</span> :
								<img src={imageUrl} />
						}
					</div>
				</label>
				<Input
					onChange={handleInputChange}
					value={formData.name}
					name="name"
					label="பெயர்"
					icon="person"
					showValidation={buttonClicked && !formValid.name}
					validationMessage="பெயரை சரியாக உள்ளிடவும்"
				/>
				<Input
					onChange={handleInputChange}
					value={formData.phoneNo}
					name="phoneNo"
					label="தொலைபேசி இலக்கம்"
					icon="call"
					showValidation={buttonClicked && !formValid.phoneNo}
					validationMessage="தொலைபேசி இலக்கத்தை சரியாக உள்ளிடவும்"
				/>
				<Input
					onChange={handleInputChange}
					value={formData.email}
					name="email"
					label="மின்னஞ்சல்"
					icon="mail"
					showValidation={buttonClicked && !formValid.email}
					validationMessage="மின்னஞ்சலை சரியாக உள்ளிடவும்"
					type="email"
				/>
				<Input
					onChange={handleInputChange}
					value={formData.password}
					name="password"
					label="கடவுச்சொல்"
					icon="password"
					showValidation={buttonClicked && !formValid.password}
					validationMessage="கடவுச்சொல்லை சரியாக உள்ளிடவும்"
					type="password"
				/>
				<Input
					onChange={handleInputChange}
					value={formData.confirmPassword}
					name="confirmPassword"
					label="கடவுச்சொல்"
					icon="password"
					showValidation={buttonClicked && (!formValid.confirmPassword || (formData.password !== formData.confirmPassword))}
					validationMessage="கடவுச்சொல்லை மீளவும் சரியாக உள்ளிடவும்"
					type="password"
				/>
			</Grid>
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
			<Grid item className="response-message">
				{responseMessage}
			</Grid>
			<Grid container item justifyContent="center">
				<SimplifiedButton onClick={changeModal.bind(null, "login")}>
					உள்நுழை
				</SimplifiedButton>
			</Grid>
		</Container>
	);
}
export default Signup;
