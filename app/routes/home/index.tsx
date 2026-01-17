import { HomeViewModelProvider } from "./useHomeViewModel"
import React from "react"
import { Home } from "./Home"

export * from "./Home"
export * from "./useHomeViewModel"
export * from "./types"

const HomePageWithProvider = () => <HomeViewModelProvider>
	<Home />
</HomeViewModelProvider>

export default HomePageWithProvider
