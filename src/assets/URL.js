const baseURL = "http://localhost:8000/api/v1";

const signUpURL = `${baseURL}/user/register`;
const signInURL = `${baseURL}/user/login`;
const logOutURL = `${baseURL}/user/logout`;
const saveURL = `${baseURL}/resume/upload`;
const delURL = `${baseURL}/resume/delete`;
const getURL = `${baseURL}/resume/get-files`;
const genAIURL = `${baseURL}/gen/summary`;

export { signInURL, signUpURL, logOutURL, saveURL, delURL, genAIURL, getURL };
