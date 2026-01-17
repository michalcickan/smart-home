import React from "react"
import type IconProps from "~/components/icons/iconProps"

const size = 24

export default (props: IconProps) =>
	<svg width={ size }
		 height={ size }
		 viewBox="0 0 24 24"
		 fill="none"
		 stroke={ props.color ?? "#000000" }
		 strokeWidth={ 2 }
		 strokeLinecap="round"
		 strokeLinejoin="round" { ...props }
	>
		<path d="M3 3h18M3 9h18M3 15h18M3 21h18M4 3v18M20 3v18" />
	</svg>
