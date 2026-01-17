export const formatLastActivity = (date: Date): string => {
	const timeString = date.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' });

// Simple check for today
	const isToday = new Date().toDateString() === date.toDateString();
	const prefix = isToday ? "Dnes" : date.toLocaleDateString();
	
	return `${ prefix }, ${ timeString }`;
};
