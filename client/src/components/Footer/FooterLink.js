import React from 'react'
import { Link } from 'react-router-dom'
import './css/footer.css'

const FooterLink = ({children,...props}) => {
	return (
		<Link className="footer-Link" {...props}>
			{children}
		</Link>
	)
}

export default FooterLink
