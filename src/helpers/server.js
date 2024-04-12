const SERVER_URL = "http://127.0.0.1:3001";

/**
 * @param {string} endpoint
 * @param {RequestInit} config
 */
function server(
	endpoint,
	config = {}
) {
	/** @type {RequestInit} */
	const _config = {
		credentials: "include",
		method: config.method || (config.body ? "POST" : "GET"),
		...config,
	};

	return fetch(SERVER_URL.concat(endpoint), _config).then(
		async (response) => {
			if (!response.ok) {
				const errorMessage = await response.text();
				return Promise.reject(new Error(errorMessage));
			}

			const type = response.headers.get("Content-Type");

			if (type && type.includes("application/json")) {
				return response.json();
			}

			return response.text();
		}
	);
}

export async function login(data) {
	if (!data.email || !data.password) {
		throw new Error("email or password is not provided");
	}
	return server("/users/login", {
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			email: data.email,
			password: data.password
		})
	});
}

export async function currentUser() {
	return server("/users/current");
}

export async function logout() {
	return server("/users/logout", {
		method: "POST",
	});
}

/**
 * @typedef CreateUserData
 * @prop {string} name
 * @prop {string} email
 * @prop {string} password
 * @prop {string} phoneNo
 * @prop {File} profileImage
 * 
 * @param {CreateUserData} data
 */
export async function signup(data) {
	const form = new FormData();

	const entries = Object.entries(data)

	for (let i = 0; i < entries.length; i++) {
		const [key, value] = entries[i];
		console.log(key, value);
		form.append(key, value);
	}

	return server("/users", {
		method: "POST",
		body: form
	})
}

/**
 * @typedef CreateMemoryData
 * @prop {string} title
 * @prop {string} description
 * @prop {File[]} images
 * 
 * @param {CreateMemoryData} data
 */
export async function createMemory(data) {
	const form = new FormData();

	form.append("title", data.title);
	form.append("description", data.description);

	for (let i = 0; i < data.images.length; i++) {
		const image = data.images[i];
		form.append("images", image);
	}

	console.log(form);
	return server("/shared-memories", {
		method: "POST",
		body: form
	})
}

export async function getAllSharedMemories() {
	return server("/shared-memories");
}