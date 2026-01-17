import { useEffect } from "react"
import { useHomeViewModel } from "./useHomeViewModel"
import { PageContainer } from "~/components/PageContainer"
import FilterButton from "~/components/FilterButton"
import Row from "~/components/Row"
import { MemoizedDeviceTile } from "~/components/tiles/DeviceTile"
import Grid from "~/components/Grid"
import Spacer from "~/components/Spacer"

export const Home = () => {
	const { loadData, filters, devices, showLoader } = useHomeViewModel()
	
	useEffect(() => {
		loadData()
	}, [])
	
	return <PageContainer showLoader={ showLoader }>
		<Row>
			{ filters.map((filter) =>
				<FilterButton key={ filter.title }  { ...filter } />)
			}
		</Row>
		<Spacer />
		<Grid>
			{ devices.map((item) => (
				<MemoizedDeviceTile
					key={ item.id.toString() }
					{ ...item }
				/>
			)) }
		</Grid>
	</PageContainer>
}
