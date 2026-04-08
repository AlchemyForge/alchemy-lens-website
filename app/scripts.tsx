import { config } from './config'

export const Scripts = () => {
	const { gaTrackingId } = config

	if (!gaTrackingId) {
		console.log('[Scripts] GA tracking ID not set, skipping analytics script injection')
		return null
	}

	return (
		<>
			<script
				async
				src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaTrackingId}');`,
				}}
			/>
		</>
	)
}