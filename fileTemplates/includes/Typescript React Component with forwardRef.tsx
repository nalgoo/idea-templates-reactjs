#if(${HTML_Element} && ${HTML_Element} != '')
#set($Element = ${HTML_Element.substring(0, 1).toUpperCase()} + ${HTML_Element.substring(1).toLowerCase()})
#else
#set($Element = 'Div')
#end
import React from 'react';

export interface ${NAME}Props extends React.ComponentPropsWithRef<'${Element.toLowerCase()}'> {
	children: React.ReactNode;
}

const ${NAME} = React.forwardRef<HTML${Element}Element, ${NAME}Props>(({
	children,
	...props
}: ${NAME}Props, ref): JSX.Element => {
	return (
		<${Element.toLowerCase()}
			ref={ref}
			{/* eslint-disable-line react/jsx-props-no-spreading */ ...props}
		>
			{children}
		</${Element.toLowerCase()}>
	);
});

${NAME}.displayName = '${NAME}';

export { ${NAME} };
