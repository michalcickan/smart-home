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
		<rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
		<path d="M7 11V7a5 5 0 0 1 9.9-1" />
	</svg>
