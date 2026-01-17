export interface Router {
	showAlert(text: string): void
}

const createRouter = (): Router => ({
	showAlert(text: string) {
		window.alert(text)
	}
})

export const useRouter = (): Router =>
	createRouter()
