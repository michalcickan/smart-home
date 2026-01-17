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
		<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
	</svg>
