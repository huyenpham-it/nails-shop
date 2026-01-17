export const formatNumber = (value, locale = navigator.language) => {
	if (value === null || value === undefined || value === '') return '';

	return new Intl.NumberFormat(locale).format(Number(value));
};
