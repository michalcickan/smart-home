export const withStopPropagating = <T extends SyntheticEvent>(
	handler?: (e: T) => void
) => {
	return (e: T) => {
		e.stopPropagation()
		if (e.nativeEvent) {
			e.nativeEvent.stopImmediatePropagation();
		}
		if (handler) {
			handler(e)
		}
	}
}

import type { SyntheticEvent } from "react"
