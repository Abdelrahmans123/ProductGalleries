"use client";
import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";
import { usePathname } from "next/navigation";

const ProductCard = ({ product, imageStyle, productStyle, category }) => {
	const pathname = usePathname();
	const isActive = pathname === `/products/${product.id}`;
	console.log("🚀 ~ ProductCard ~ pathname:", pathname);
	return (
		<Card className="h-100" style={productStyle}>
			<Card.Img
				variant="top"
				src={product.image}
				alt={product.title}
				style={imageStyle}
			/>
			<Card.Body>
				<Card.Title>{product.title}</Card.Title>
				<Card.Text>
					{isActive
						? product.description
						: product.description.substring(0, 50)}
					...
				</Card.Text>
				{!isActive && (
					<Link href={`/products/${product.id}`} className="btn btn-primary">
						Show Details
					</Link>
				)}
			</Card.Body>
			<Card.Footer>
				<small className="text-muted">${product.price}</small>
				{category && (
					<small className="text-muted ms-4 w-25">
						Category: {product.category}
					</small>
				)}
			</Card.Footer>
		</Card>
	);
};

export default ProductCard;
