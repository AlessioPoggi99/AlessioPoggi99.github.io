const FormattedDate = ({ date, dateClass = '' }) => {
	return (
		<time dateTime={date.toISOString()} className={dateClass}>
			{
				date.toLocaleDateString('en-us', {
					year: 'numeric',
					month: 'short',
					day: 'numeric',
				})
			}
		</time>
	)
}

export default FormattedDate;
