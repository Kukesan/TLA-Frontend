import { Grid } from "@mui/material"
import "./input.css";

export default function Input(props) {
	const { showValidation, label: labelText, icon, validationMessage, as, ...otherProps } = props;

	return <Grid item className="input">
		<label>
			<span className="label">
				{labelText}
			</span>
			<div className="input-container">
				{as == "textarea"
					? <textarea {...otherProps}></textarea>
					: <input
						{...otherProps}
					></input>
				}
				{
					typeof icon == "string" ?
						<span className="icon material-symbols-outlined">
							{icon}
						</span> : null
				}
			</div>
		</label>
		<div className={showValidation ? 'inValid-input' : 'valid-input'}>{validationMessage}</div>
	</Grid >
}
