import React from 'react';

export interface ${NAME}Props {
	children: React.ReactNode;
}

function ${NAME}({
	children,
}: ${NAME}Props): JSX.Element {
	return (
		<div>
			something
		</div>
	);
}

${NAME}.disaplyName = '${NAME}';

export { ${NAME} };