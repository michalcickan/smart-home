export const readStorageObject = async <T>(key: string): Promise<T | null> => {
	const jsonValue = await localStorage.getItem(key)
	return jsonValue != null ? JSON.parse(jsonValue) : null
}

export const storeObject = async <T>(key: string, value: T) => {
	const jsonValue = JSON.stringify(value)
	await localStorage.setItem(key, jsonValue)
}
