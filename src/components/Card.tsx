import { ReactNode } from 'react';
import '../styles/Card.css';

/**
 * Shell Component -- Card
 * @param props children
 * @returns
 */

interface CardProps {
	className: string;
	children: ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
	return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
