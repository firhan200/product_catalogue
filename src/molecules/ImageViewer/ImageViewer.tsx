import { useState } from "react";
import Image from "../../atoms/Image/Image";

export default function ImageViewer({ images }: { images: string[] }) {
	const [selectedImage, setSelectedImage] = useState(images[0]);
	return (
		<div>
			<Image src={selectedImage} />
			<div className="flex my-4 gap-2">
				{
					images.map((img, key) => <div key={key} style={{ cursor: "pointer" }} onClick={() => setSelectedImage(img)}><Image src={img} /></div>)
				}
			</div>
		</div>
	);
}
