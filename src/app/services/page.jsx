import MyServices from './components/MyServices';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function Services() {
	const res = await fetch(`${API_URL}/api/services`, {
		cache: 'no-store'
	});
	const services = await res.json();

	const results = await fetch(`${API_URL}/api/employees`, {
		cache: 'no-store'
	});
	const employees = await results.json();

	if (!services || !employees) {
		return <div>Services not found</div>;
	}

	return <MyServices services={services} employees={employees} />;
}
