export const load = async ({ fetch }) => {
	const res = await fetch('http://localhost:3000/api/all');
	const item = await res.json();

	return { item };
};
