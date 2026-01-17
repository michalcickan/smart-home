import React from "react"
import type IconProps from "~/components/icons/iconProps"

const size = 24

export default (props: IconProps) =>
	<svg width={ size }
		 height={ size }
		 viewBox="0 0 24 24"
		 fill={ props.color ?? "none" }
		 fill-opacity={ props.fillColorOpacity }
		 stroke={ "#000000" }
		 strokeWidth={ 2 }
		 strokeLinecap="round"
		 strokeLinejoin="round"
		 { ...props }
	>
		<path
			d="M15 22h-6M12 2v1M4.22 4.22l.71.71M2 12h1M4.22 19.78l.71-.71M12 21a6 6 0 0 1-6-6c0-3.31 2.69-6 6-6s6 2.69 6 6a6 6 0 0 1-6 6Z" />
	</svg>
